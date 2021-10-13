export interface IUser {
  token: string
  username: string
  email: string
  firstName: string
  lastName: string
}

export interface IcredencialConfig {
  headers: { [key: string]: string }
}
