import axios from 'axios';

// Base URLs now rely directly on next.config.js `rewrites()` to bypass CORS via Next.js proxy
const AUTH_API_URL = '/api/auth';
const SHIFT_API_URL = '/api/shifts';
const CIRCADIAN_API_URL = '/api/circadian';
const AI_API_URL = '/api/ai';

export const api = axios.create({
    baseURL: AUTH_API_URL, // Default to auth for login/register
    headers: {
        'Content-Type': 'application/json',
    },
});

export const shiftApi = axios.create({
    baseURL: SHIFT_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// circadian-engine: POST /v1/circadian/profile
export const circadianApi = axios.create({
    baseURL: CIRCADIAN_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// plan-service: GET & POST /v1/plans
export const planApi = axios.create({
    baseURL: '/api/plans',
    headers: { 'Content-Type': 'application/json' },
});

export const generatePlan = async (data: {
    date: string;
    shiftId: string;
    shiftType: string;
    profileData?: any;
}) => {
    return planApi.post('/generate', data);
};

// meal-service: GET & POST /v1/meals
export const mealApi = axios.create({
    baseURL: '/api/meals',
    headers: { 'Content-Type': 'application/json' },
});

// progress-service: GET /v1/progress
export const progressApi = axios.create({
    baseURL: '/api/progress',
    headers: { 'Content-Type': 'application/json' },
});

export const getWeeklyStats = () => progressApi.get('/weekly-stats');
export const getWeeklyAudit = () => progressApi.post('/weekly-audit');
export const getTodayProgress = () => progressApi.get('/today');
export const logHydration = (amount: number) => progressApi.post('/hydration', { amount });
export const toggleSupplement = (supplementName: string, isTaken: boolean) =>
    progressApi.post('/supplements', { supplementName, isTaken });
export const updateLightExposure = (completed: boolean) =>
    progressApi.post('/light-exposure', { completed });

// notification-service: GET & PUT /v1/notifications
export const notificationApi = axios.create({
    baseURL: '/api/notifications',
    headers: { 'Content-Type': 'application/json' },
});

// user-service: GET & PUT /v1/users
export const userApi = axios.create({
    baseURL: '/api/users',
    headers: { 'Content-Type': 'application/json' },
});

export const getStudents = () => userApi.get('/me/students');
export const assignProtocol = (studentId: string, protocolId: string | null) =>
    userApi.post(`/students/${studentId}/assign-protocol`, { protocolId });

// plan-service: protocols
export const getProtocols = () => planApi.get('/protocols');
export const createProtocol = (data: any) => planApi.post('/protocols', data);
export const deleteProtocol = (id: string) => planApi.delete(`/protocols/${id}`);

// subscription-service: GET & POST /v1/subscriptions
export const subscriptionApi = axios.create({
    baseURL: '/api/subscriptions',
    headers: { 'Content-Type': 'application/json' },
});

export const aiApi = axios.create({
    baseURL: AI_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const swapMeal = (data: {
    meal_to_swap: any;
    preferences: any;
    provider?: string;
}) => aiApi.post('/meal-swap', data);

export const scoreMeal = (data: {
    userId: string;
    meal: any;
    preferences: any;
}) => aiApi.post('/meal-score', data);

export const chatWithCoach = (data: {
    userId: string;
    message: string;
    history: any[];
    context: any;
}) => aiApi.post('/chat', data);

export const exerciseApi = axios.create({
    baseURL: '/api/exercises',
    headers: { 'Content-Type': 'application/json' },
});

export const logWorkout = (data: any) => exerciseApi.post('/', data);
export const getRecentWorkouts = (limit = 10) => exerciseApi.get(`/?limit=${limit}`);
export const searchExerciseLibrary = (query: string) => exerciseApi.get(`/library?query=${query}`);

export const sleepApi = axios.create({
    baseURL: '/api/sleep',
    headers: { 'Content-Type': 'application/json' },
});

export const communityApi = axios.create({
    baseURL: '/api/community',
    headers: { 'Content-Type': 'application/json' },
});

export const chatApi = axios.create({
    baseURL: '/api/coaches', // We'll use /api/coaches as the proxy map to chat-service
    headers: { 'Content-Type': 'application/json' },
});

// SSR guard — localStorage and window are only available in the browser
const isBrowser = typeof window !== 'undefined';

// Helper to set tokens + session indicator cookie (used by middleware for route protection)
export const setTokens = (accessToken: string, refreshToken: string) => {
    if (!isBrowser) return;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    // Session cookie — not httpOnly (client-readable), used as a middleware hint only.
    // The actual security is enforced by JWT validation on the backend for every API call.
    const maxAge = 60 * 60 * 24 * 7; // 7 days
    document.cookie = `nf_auth=1; path=/; max-age=${maxAge}; SameSite=Strict`;
};

export const clearTokens = () => {
    if (!isBrowser) return;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Clear the session cookie
    document.cookie = 'nf_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict';
};

export const getAccessToken = () => isBrowser ? localStorage.getItem('accessToken') : null;
export const getRefreshToken = () => isBrowser ? localStorage.getItem('refreshToken') : null;

// Request interceptor to add token
const authInterceptor = (config: any) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

api.interceptors.request.use(authInterceptor);
shiftApi.interceptors.request.use(authInterceptor);
circadianApi.interceptors.request.use(authInterceptor);
aiApi.interceptors.request.use(authInterceptor);
planApi.interceptors.request.use(authInterceptor);
mealApi.interceptors.request.use(authInterceptor);
progressApi.interceptors.request.use(authInterceptor);
notificationApi.interceptors.request.use(authInterceptor);
userApi.interceptors.request.use(authInterceptor);
subscriptionApi.interceptors.request.use(authInterceptor);
exerciseApi.interceptors.request.use(authInterceptor);
sleepApi.interceptors.request.use(authInterceptor);
communityApi.interceptors.request.use(authInterceptor);
chatApi.interceptors.request.use(authInterceptor);

// Response interceptor for refresh token logic
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

const errorInterceptor = async (error: any) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
            return new Promise(function (resolve, reject) {
                failedQueue.push({ resolve, reject });
            })
                .then((token) => {
                    originalRequest.headers['Authorization'] = 'Bearer ' + token;
                    return axios(originalRequest);
                })
                .catch((err) => {
                    return Promise.reject(err);
                });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        const refreshToken = getRefreshToken();

        if (!refreshToken) {
            return Promise.reject(error);
        }

        try {
            const response = await axios.post(`${AUTH_API_URL}/refresh`, {
                refreshToken,
            });

            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
            setTokens(newAccessToken, newRefreshToken);

            api.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
            shiftApi.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
            circadianApi.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
            aiApi.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
            progressApi.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
            notificationApi.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
            userApi.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
            subscriptionApi.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
            originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;

            processQueue(null, newAccessToken);
            return axios(originalRequest);
        } catch (err) {
            processQueue(err, null);
            clearTokens();
            if (isBrowser) window.location.href = '/login';
            return Promise.reject(err);
        } finally {
            isRefreshing = false;
        }
    }

    return Promise.reject(error);
};

api.interceptors.response.use((response) => response, errorInterceptor);
shiftApi.interceptors.response.use((response) => response, errorInterceptor);
circadianApi.interceptors.response.use((response) => response, errorInterceptor);
aiApi.interceptors.response.use((response) => response, errorInterceptor);
planApi.interceptors.response.use((response) => response, errorInterceptor);
mealApi.interceptors.response.use((response) => response, errorInterceptor);
progressApi.interceptors.response.use((response) => response, errorInterceptor);
notificationApi.interceptors.response.use((response) => response, errorInterceptor);
userApi.interceptors.response.use((response) => response, errorInterceptor);
subscriptionApi.interceptors.response.use((response) => response, errorInterceptor);
exerciseApi.interceptors.response.use((response) => response, errorInterceptor);
sleepApi.interceptors.response.use((response) => response, errorInterceptor);
communityApi.interceptors.response.use((response) => response, errorInterceptor);
chatApi.interceptors.response.use((response) => response, errorInterceptor);
