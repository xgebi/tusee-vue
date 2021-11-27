import IUser from '@/interfaces/IUser';
import UserRepository from '@/repositories/user.repository';

class UserService {
  public static async isRegistrationEnabled(): Promise<boolean> {
    return UserRepository.isRegistrationEnabled();
  }

  public static async register(): Promise<IUser> {
    return {
      name: '',
    };
  }
}

export default UserService;
