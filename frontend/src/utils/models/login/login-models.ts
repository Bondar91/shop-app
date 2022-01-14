export interface ILoginRequestModel {
  email: string;
  password: string;
}

export interface ILoginResponseModel {
  status: boolean;
  data: {
    token: string;
  };
  message: string;
}
