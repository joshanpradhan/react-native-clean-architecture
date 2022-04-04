export class InvalidCredentialsError extends Error {
  constructor (error:string) {
    super(error)
    this.name = 'InvalidCredentialsError'
  }
}
