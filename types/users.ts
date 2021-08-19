export interface IUser {
  name: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  county: string;
  postcode: string;
}

export interface INewUserForm extends IUser {
  password: string;
  passwordConfirm: string;
}

export interface IUserWithId extends IUser {
  id: string;
}

export type Users = IUserWithId[];

export interface IUsersData {
  users: Users;
}

export type IUserKey =
  | "name"
  | "email"
  | "address1"
  | "address2"
  | "city"
  | "county"
  | "postcode";

export type INewUserKey = IUserKey | "password" | "passwordConfirm";

export interface INewUserError {
  key: INewUserKey | "";
  message: string;
}
