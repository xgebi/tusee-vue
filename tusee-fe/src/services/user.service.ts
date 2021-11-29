import IUser from '@/interfaces/IUser';
import UserRepository from '@/repositories/user.repository';
import IUserFormData from '@/interfaces/IUserFormData';

class UserService {
  public static async isRegistrationEnabled(): Promise<boolean> {
    return UserRepository.isRegistrationEnabled();
  }

  public static async register(data: IUserFormData): Promise<IUser> {
    return UserRepository.register(data);
  }
}

export default UserService;
