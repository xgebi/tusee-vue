import IUserFormData from '@/interfaces/IUserFormData';
import IUser from '@/interfaces/IUser';
// import axios from 'axios';
// import IIsEnabled from '@/interfaces/IRegistrationEnabled';

class UserRepository {
  public static async isRegistrationEnabled(): Promise<boolean> {
    // try {
    //   const res: IIsEnabled = (await axios.get(
    //       `${process.env.VUE_APP_API_URL}/api/registration-enabled`,
    //     )
    //   ).data as IIsEnabled;
    //   return res.is_enabled;
    // } catch (error) {
    //   return false;
    // }
    return true;
  }

  public static async register(data: IUserFormData): Promise<IUser> {
    return {
      name: '',
    };
  }
}

export default UserRepository;
