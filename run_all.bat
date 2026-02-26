@echo off
title NightFuel Service Launcher
echo =====================================================================
echo                NIGHTFUEL MICROSERVICES LAUNCHER
echo =====================================================================
echo Starting all 12 microservices in separate windows...
echo.

:: 1. Auth Service (3001)
echo [1/12] Launching Auth Service (3001)...
start "Auth Service" cmd /k "cd services\auth-service && npm run dev"

:: 2. Shift Service (3002)
echo [2/12] Launching Shift Service (3002)...
start "Shift Service" cmd /k "cd services\shift-service && npm run dev"

:: 3. Circadian Engine (3003)
echo [3/12] Launching Circadian Engine (3003)...
start "Circadian Engine" cmd /k "cd services\circadian-engine && venv\Scripts\python.exe -m uvicorn app.main:app --host 0.0.0.0 --port 3003"

:: 4. AI Pipeline (3004)
echo [4/12] Launching AI Pipeline (3004)...
start "AI Pipeline" cmd /k "cd services\ai-pipeline && venv\Scripts\python.exe -m uvicorn app.main:app --host 0.0.0.0 --port 3004"

:: 5. Plan Service (3005)
echo [5/12] Launching Plan Service (3005)...
start "Plan Service" cmd /k "cd services\plan-service && npm run dev"

:: 6. Meal Service (3006)
echo [6/12] Launching Meal Service (3006)...
start "Meal Service" cmd /k "cd services\meal-service && npm run dev"

:: 7. Progress Service (3007)
echo [7/12] Launching Progress Service (3007)...
start "Progress Service" cmd /k "cd services\progress-service && npm run dev"

:: 8. Notification Service (3008)
echo [8/12] Launching Notification Service (3008)...
start "Notification Service" cmd /k "cd services\notification-service && npm run dev"

:: 9. User Service (3009)
echo [9/12] Launching User Service (3009)...
start "User Service" cmd /k "cd services\user-service && npm run dev"

:: 10. Subscription Service (3010)
echo [10/12] Launching Subscription Service (3010)...
start "Subscription Service" cmd /k "cd services\subscription-service && npm run dev"

:: 11. Exercise Service (3011)
echo [11/12] Launching Exercise Service (3011)...
start "Exercise Service" cmd /k "cd services\exercise-service && npm run dev"

:: 12. Sleep Service (3012)
echo [12/13] Launching Sleep Service (3012)...
start "Sleep Service" cmd /k "cd services\sleep-service && npm run dev"

:: 13. Web Client (3000)
echo [13/13] Launching Web Client (3000)...
start "Web Client" cmd /k "cd clients\web && npm run dev"

echo.
echo =====================================================================
echo All services are starting. Please check individual windows for logs.
echo =====================================================================
pause
