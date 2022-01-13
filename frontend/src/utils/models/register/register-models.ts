export interface IRegisterRequestModel {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IRegisterResponseModel {
  status: boolean;
  token: string;
  message: string;
}
