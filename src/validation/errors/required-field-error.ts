export class RequiredFieldError extends Error {
  constructor () {
    super('Required!')
    this.name = 'RequiredFieldError'
  }
}
