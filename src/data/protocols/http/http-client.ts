export type HttpRequest = {
  url: string
  method: HttpMethod.POST | HttpMethod.GET | HttpMethod.PUT | HttpMethod.DELETE
  body?: any
  headers?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export enum HttpStatusCode {
  ok = 200,
  success = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export enum HttpMethod {
  POST = "post",
  GET = "get",
  PUT = "put",
  DELETE = "delete",
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
