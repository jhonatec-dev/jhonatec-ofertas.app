interface IUser {
  _id?: string
  name: string
  email: string
  password: string
  role: string
  disabled: boolean
  deleted: boolean
  phone: string
  created_at: Date
  updated_at: Date
}

interface IUserLogin {
  email: string
  password: string
}

interface IUserRegister {
  name: string
  email: string
  phone: string
}

interface IUserToken{
  _id: string
  email: string
  role: string
  name: string
  phone: string
}

export type { IUser, IUserLogin, IUserRegister, IUserToken }
