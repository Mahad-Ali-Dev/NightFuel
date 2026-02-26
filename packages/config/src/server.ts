import cluster from 'cluster';
import os from 'os';
import { Logger } from 'pino';

export interface BootstrapOptions {
    logger: Logger;
    serviceName: string;
    port: number;
    startServer: () => Promise<void>;
}

export function bootstrapCluster(options: BootstrapOptions) {
    const { logger, serviceName, port, startServer } = options;

    // Check if clustering is enabled via env or if we're in production
    const isClusteringEnabled = process.env.NODE_ENV === 'production' || process.env.ENABLE_CLUSTER === 'true';
    const numCPUs = parseInt(process.env.WEB_CONCURRENCY || '0') || os.cpus().length;

    if (isClusteringEnabled && cluster.isPrimary) {
        logger.info({ serviceName, numCPUs }, `Primary process ${process.pid} is starting cluster`);

        // Fork workers
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            logger.warn({ pid: worker.process.pid, code, signal }, 'Worker process died. Forking replacement...');
            cluster.fork();
        });
    } else {
        // Simple start (either worker or non-clustered)
        startServer().catch(err => {
            logger.error(err, `Failed to start ${serviceName}`);
            process.exit(1);
        });
    }
}
