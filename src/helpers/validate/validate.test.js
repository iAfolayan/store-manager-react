import {LogInValidator, ValidateCategory, CreateUserValidator } from '.';

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
    test('should check for valid name', () => {
      const name = '';
      const checkUser = ValidateCategory(name);
      expect(checkUser.name).toEqual('This field is required');
    });
    test('should check if is alphabet', () => {
      const name = 'a8erty'
      const checkUser = ValidateCategory(name);
      expect(checkUser.name).toEqual('Oops!!! can ONLY be alphabet');
    });
  });
});

describe('Validate create user', () => {
  test('should check if title field is empty', () => {
    const user = {
      title: '',
      staffId: 'SM0003',
      phoneNumber: '09832156788',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.title).toEqual('This field is required');
  });
  test('should check if title contains a number', () => {
    const user = {
      title: 't8tyf',
      staffId: 'SM0003',
      phoneNumber: '09832156788',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.title).toEqual('Oops!!! can ONLY be alphabet');
  });

  test('should check for valid staffId', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM0003',
      phoneNumber: '09832156788',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.staffId).toEqual('This field is required');
  });

  test('should check if staffId contains the prefix "SM"', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM0003',
      phoneNumber: '09832156788',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.staffId).toEqual('Oops!!! Invalid StaffId must contain "SM"');
  });

  test('should check if phone number is empty', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM0003',
      phoneNumber: '',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.staffId).toEqual('This field is required');
  });

  test('should check if entry is not a valid phone number', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM0003',
      phoneNumber: '9806d6767sf',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.staffId).toEqual('Oops!!! Invalid input');
  });

  test('should check if fullname is empty', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM0003',
      phoneNumber: '',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.staffId).toEqual('This field is required');
  });

  test('should check if fullname is empty', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM0003',
      phoneNumber: '9806d6767sf',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.staffId).toEqual('Oops!!! can ONLY be alphabet');
  });

});

