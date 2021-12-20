import IUser from '@/interfaces/IUser';
import UserRepository from '@/repositories/user.repository';
import IUserFormData from '@/interfaces/IUserFormData';
import IUserCreateResult from '@/interfaces/IUserCreateResult';

class UserService {
  public static async isRegistrationEnabled(): Promise<boolean> {
    return UserRepository.isRegistrationEnabled();
  }

  public static async register(
    data: IUserFormData,
  ): Promise<IUserCreateResult> {
    return UserRepository.register(data);
  }

  public static async login(data: IUserFormData): Promise<IUser> {
    return UserRepository.login(data);
  }
}

export default UserService;
