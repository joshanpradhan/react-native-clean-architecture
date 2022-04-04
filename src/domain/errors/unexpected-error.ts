export class UnexpectedError extends Error {
  constructor (error:string) {
    super(error)
    this.name = 'UnexpectedError'
  }
}