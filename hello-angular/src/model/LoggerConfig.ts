import { InjectionToken } from '@angular/core';

export interface LoggerConfig {
  logLevel?: string;
  prefix?: string;
}

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('logger.config');
