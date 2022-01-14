import Api from '../../api';
import { ILoginRequestModel, ILoginResponseModel } from '../../utils';

export class LoginCommands {
  loginUser = (requestQuery: ILoginRequestModel) => {
    return Api.post<ILoginResponseModel>('login', requestQuery);
  };
}
