export class InvalidFieldError extends Error {
  constructor () {
    super('Invalid!')
    this.name = 'InvalidFieldError'
  }
}
