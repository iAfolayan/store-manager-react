import {LogInValidator, ValidateCategory, CreateProductValidator, CreateUserValidator } from '.';

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
      phonenumber: '09832156788',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.title).toEqual('This field is required');
  });


  test('should check for valid staffId', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SR0003',
      phonenumber: '09832156788',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.staffId).toEqual('Oops!!! Invalid StaffId must contain "SM"');
  });

  test('should check if staffId contains the prefix "SM"', () => {
    const user = {
      title: 'ttyf',
      staffId: '0003',
      phonenumber: '09832156788',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.staffId).toEqual('Oops!!! Invalid StaffId must contain "SM"');
  });

  test('should check if phone number is empty', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM001',
      phonenumber: '',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.phonenumber).toEqual('This field is required');
  });

  test('should check if entry is not a valid phone number', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM0003',
      phonenumber: '9806d6767sf',
      fullname: 'oluchi Amaka'
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.phonenumber).toEqual('Oops!!! Invalid input');
  });

  test('should check if fullname is empty', () => {
    const user = {
      title: 'ttyf',
      staffId: 'SM0003',
      phonenumber: '08097654322',
      fullname: ''
    }
    const checkUser = CreateUserValidator(user);
    expect(checkUser.fullname).toEqual('This field is required');
  });
});

describe('Create Product Validator Test', () => {
  test('should check if product name is empty', () => {
    const product = {
      productname: '',
      price: '450',
      description: 'This is the begining of all.',
      minimumallowed: '20',
      productImage: 'image.jpg'
    }
    const checkProduct = CreateProductValidator(product);
    expect(checkProduct.productname).toEqual('This field is required');
  });

  test('should check if product price is empty', () => {
    const product = {
      productname: 'Mobile',
      price: '',
      description: 'This is the begining of all.',
      minimumallowed: '20',
      productImage: 'image.jpg'
    }
    const checkProduct = CreateProductValidator(product);
    expect(checkProduct.price).toEqual('This field is required');
  });

  test('should check if product description is empty', () => {
    const product = {
      productname: 'Mobile',
      price: '450',
      description: '',
      minimumallowed: '20',
      productImage: 'image.jpg'
    }
    const checkProduct = CreateProductValidator(product);
    expect(checkProduct.description).toEqual('This field is required');
  });

  test('should check if product description exceed length', () => {
    const product = {
      productname: 'Mobile',
      price: '450',
      description: 'This is the very best of react test. Enjoying this. Meanwhile, I need my test to be above 70%. This is the very best of react test. Enjoying this. Meanwhile, I need my test to be above 70%.This is the very best of react test. Enjoying this. Meanwhile, I need ',
      minimumallowed: '20',
      productImage: 'image.jpg'
    }
    const checkProduct = CreateProductValidator(product);
    expect(checkProduct.description).toEqual('Oops!!! exceed description length');
  });

  test('should check if minimum allowed is empty', () => {
    const product = {
      productname: 'Mobile',
      price: '450',
      description: 'This is cool',
      minimumallowed: '',
      productImage: 'image.jpg'
    }
    const checkProduct = CreateProductValidator(product);
    expect(checkProduct.minimumallowed).toEqual('This field is required');
  });

  test('should check if minimum allowed is not an integer', () => {
    const product = {
      productname: 'Mobile',
      price: '450',
      description: 'This is cool',
      minimumallowed: '34b4',
      productImage: 'image.jpg'
    }
    const checkProduct = CreateProductValidator(product);
    expect(checkProduct.minimumallowed).toEqual('Oops!!! enter a valid number');
  });

  test('should check if product image is empty', () => {
    const product = {
      productname: 'Mobile',
      price: '450',
      description: 'This is cool',
      minimumallowed: '344',
      productImage: ''
    }
    const checkProduct = CreateProductValidator(product);
    expect(checkProduct.productImage).toEqual('Product Image field is required');
  });

  test('should check if product image is empty', () => {
    const product = {
      productname: 'Mobile',
      price: '450',
      description: 'This is cool',
      minimumallowed: '344',
      productImage: ''
    }
    const checkProduct = CreateProductValidator(product);
    expect(checkProduct.productImage).toEqual('Product Image field is required');
  });
});
