import Api from '../../api';
import { IRegisterRequestModel, IRegisterResponseModel } from '../../utils';

export class RegisterCommands {
  create = (requestQuery: IRegisterRequestModel) => {
    return Api.post<IRegisterResponseModel>('register', requestQuery);
  };
}
