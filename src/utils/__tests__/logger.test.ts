import { Logger } from '../../logger'

// Mock console methods
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation()
const mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation()
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation()

describe('Logger', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Reset NODE_ENV for each test
    process.env.NODE_ENV = 'test'
  })

  afterAll(() => {
    mockConsoleLog.mockRestore()
    mockConsoleWarn.mockRestore()
    mockConsoleError.mockRestore()
  })

  describe('constructor', () => {
    it('should use default scope when none provided', () => {
      const logger = new Logger()
      expect(logger.scope).toBe('react-fontawesome')
    })

    it('should use custom scope when provided', () => {
      const logger = new Logger('custom-scope')
      expect(logger.scope).toBe('custom-scope')
    })

    it('should be enabled in non-production', () => {
      process.env.NODE_ENV = 'development'
      const logger = new Logger()
      expect(logger.enabled).toBe(true)
    })

    it('should be disabled in production', () => {
      process.env.NODE_ENV = 'production'
      const logger = new Logger()
      expect(logger.enabled).toBe(false)
    })
  })

  describe('log method', () => {
    it('should log messages when enabled', () => {
      const logger = new Logger('test')
      logger.enabled = true

      logger.log('test message')

      expect(mockConsoleLog).toHaveBeenCalledWith('[test]', 'test message')
    })

    it('should not log messages when disabled', () => {
      const logger = new Logger('test')
      logger.enabled = false

      logger.log('test message')

      expect(mockConsoleLog).not.toHaveBeenCalled()
    })

    it('should handle multiple arguments', () => {
      const logger = new Logger('test')
      logger.enabled = true

      logger.log('message', 123, { key: 'value' })

      expect(mockConsoleLog).toHaveBeenCalledWith('[test]', 'message', 123, {
        key: 'value',
      })
    })
  })

  describe('warn method', () => {
    it('should log warnings when enabled', () => {
      const logger = new Logger('test')
      logger.enabled = true

      logger.warn('warning message')

      expect(mockConsoleWarn).toHaveBeenCalledWith('[test]', 'warning message')
    })

    it('should not log warnings when disabled', () => {
      const logger = new Logger('test')
      logger.enabled = false

      logger.warn('warning message')

      expect(mockConsoleWarn).not.toHaveBeenCalled()
    })

    it('should handle multiple arguments', () => {
      const logger = new Logger('test')
      logger.enabled = true

      logger.warn('warning', 456, [1, 2, 3])

      expect(mockConsoleWarn).toHaveBeenCalledWith(
        '[test]',
        'warning',
        456,
        [1, 2, 3],
      )
    })
  })

  describe('error method', () => {
    it('should log errors when enabled', () => {
      const logger = new Logger('test')
      logger.enabled = true

      logger.error('error message')

      expect(mockConsoleError).toHaveBeenCalledWith('[test]', 'error message')
    })

    it('should not log errors when disabled', () => {
      const logger = new Logger('test')
      logger.enabled = false

      logger.error('error message')

      expect(mockConsoleError).not.toHaveBeenCalled()
    })

    it('should handle multiple arguments', () => {
      const logger = new Logger('test')
      logger.enabled = true

      const error = new Error('test error')
      logger.error('error occurred', error)

      expect(mockConsoleError).toHaveBeenCalledWith(
        '[test]',
        'error occurred',
        error,
      )
    })
  })
})
