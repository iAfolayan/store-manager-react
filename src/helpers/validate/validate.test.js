import {LogInValidator, ValidateCategory } from '.';

describe('Store Manager Validation Testing', () => {
  describe('Login validator', () => {
    test('should check for valid staffId', () => {
      const user = {
        staffId: '',
        password: 'passwordA23s'
      };
      const checkUser = LogInValidator(user);
      expect(checkUser.staffId).toEqual('Staff Id field is required');
    });
  
    test('should check if staffId contains the prefix "SM"', () => {
      const user = {
        staffId: 'SD0001',
        password: 'passwordA23s'
      };
      const checkUser = LogInValidator(user);
      expect(checkUser.staffId).toEqual('Invalid staffId format');
    });
  
    test('should check if password field is empty', () => {
      const user = {
        staffId: 'SM0001',
        password: ''
      };
      const checkUser = LogInValidator(user);
      expect(checkUser.password).toEqual('Password field is required');
    });
  
    test('should check if password is in right format', () => {
      const user = {
        staffId: 'SM003',
        password: 'passwo23s'
      };
      const checkUser = LogInValidator(user);
      expect(checkUser.password).toEqual('Password must be at least 8 characters, 1 uppercase letter, 1 number');
    });
  });

  describe('Create category validator', () => {
    it('should check for valid name', () => {
      const name = '';
      const checkUser = ValidateCategory(name);
      expect(checkUser.name).toEqual('This field is required');
    });
    it('should check if is alphabet', () => {
      const name = 'a8erty'
      const checkUser = CreateUserValidation(name);
      expect(checkUser.name).toEqual('Oops!!! can ONLY be alphabet');
    });
  });
});
