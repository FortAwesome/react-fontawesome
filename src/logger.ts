/**
 * Logger class for logging messages in different environments.
 * It provides methods to log messages, warnings, and errors based on the environment.
 *
 * The logs will only be printed if the environment is not production by default.
 * You can enable logging in production by passing `true` as the second argument to the constructor.
 *
 * @class Logger
 *
 * @example
 * ```javascript
 * const logger = new Logger('my-scope');
 * logger.log('This is a log message'); // Output: [my-scope] This is a log message
 * logger.warn('This is a warning message'); // Output: [my-scope] This is a warning message
 * logger.error('This is an error message'); // Output: [my-scope] This is an error message
 * ```
 */
export class Logger {
  enabled = false
  scope: string

  constructor(
    /**
     * The scope for the logger, used to prefix log messages.
     * @default 'react-fontawesome'
     */
    scope = 'react-fontawesome',
  ) {
    let IS_DEV = false

    try {
      IS_DEV =
        typeof process !== 'undefined' &&
        process.env?.NODE_ENV === 'development'
    } catch {
      // Do nothing.
    }

    this.scope = scope
    this.enabled = IS_DEV
  }

  /**
   * Logs messages to the console if not in production.
   * @param args - The message and/or data to log.
   */
  log(...args: unknown[]): void {
    if (!this.enabled) return

    console.log(`[${this.scope}]`, ...args)
  }

  /**
   * Logs warnings to the console if not in production.
   * @param args - The warning message and/or data to log.
   */
  warn(...args: unknown[]): void {
    if (!this.enabled) return

    console.warn(`[${this.scope}]`, ...args)
  }

  /**
   * Logs errors to the console if not in production.
   * @param args - The error message and/or data to log.
   */
  error(...args: unknown[]): void {
    if (!this.enabled) return

    console.error(`[${this.scope}]`, ...args)
  }
}
