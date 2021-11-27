import IUser from '@/interfaces/IUser';

class UserService {
  public static async isRegistrationEnabled(): Promise<boolean> {
    return true;
  }

  public static async register(): Promise<IUser> {
    return {
      name: '',
    };
  }
}

export default UserService;
