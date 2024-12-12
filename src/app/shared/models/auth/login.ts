export interface ILogin{
    email: string
    password: number
}

export interface ILoginPayload{
    "success": boolean,
    "message": string,
    "token": string
}

export interface ICheckLogin{
    message: string ,
    valid: boolean,
  }