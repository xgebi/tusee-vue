class UserRepository {
  public static async isRegistrationEnabled(): Promise<boolean> {
    return true;
  }
}

export default UserRepository;
