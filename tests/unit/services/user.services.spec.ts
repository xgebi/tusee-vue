import UserRepository from '@/repositories/user.repository';
import UserService from '@/services/user.service';

describe('user.service.ts', () => {
  describe('isRegistrationEnabled', () => {
    it('isRegistrationEnabled calls repository and gets true value', async () => {
      jest
        .spyOn(UserRepository, 'isRegistrationEnabled')
        .mockImplementationOnce((): Promise<boolean> => Promise.resolve(true));
      const res = await UserService.isRegistrationEnabled();
      expect(UserRepository.isRegistrationEnabled).toHaveBeenCalled();
      expect(res).toBe(true);
    });
    it('isRegistrationEnabled calls repository and gets false value', async () => {
      jest
        .spyOn(UserRepository, 'isRegistrationEnabled')
        .mockImplementationOnce((): Promise<boolean> => Promise.resolve(false));
      const res = await UserService.isRegistrationEnabled();
      expect(UserRepository.isRegistrationEnabled).toHaveBeenCalled();
      expect(res).toBe(false);
    });
  });
});
