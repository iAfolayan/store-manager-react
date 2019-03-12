import Validator from 'validator';

export const LogInValidator = (user) => {
  const errors = {};

  if (Validator.isEmpty(user.staffId)) {
    errors.staffId = 'Staff Id field is required';
  } else if (!Validator.contains(user.staffId, 'SM')) {
    errors.staffId = 'Invalid staffId format';
  }
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } else if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$', 'g').test(user.password)) {
    errors.password = 'Password must be at least 8 characters, 1 uppercase letter, 1 number';
  }
  return errors;
};

export const CreateProductValidator = (product) => {
  const errors = {};

  if(Validator.isEmpty(product.productname)) {
    errors.productname = 'This field is required';
  }

  if(Validator.isEmpty(product.price)) {
    errors.price = 'This field is required';
  } else if (!Validator.isFloat(product.price)) {
    errors.price = 'Oops!!! enter a valid amount';
  }

  if(Validator.isEmpty(product.description)) {
    errors.description = 'This field is required';
  } else if(!Validator.isLength(product.description, { max: 255 })) {
    errors.description = 'Oops!!! exceed description length';
  }
  if(Validator.isEmpty(product.minimumallowed)) {
    errors.minimumallowed = 'This field is required';
  } else if (!Validator.isInt(product.minimumallowed)) {
    errors.minimumallowed = 'Oops!!! enter a valid number';
  }
  if(Validator.isEmpty(product.productImage)) {
    errors.productImage = 'Product Image field is required';
  }
  return errors;
}

export const ValidateCategory = (name) => {
  const errors = {};

  if(Validator.isEmpty(name)) {
    errors.name = 'This field is required';
  } else if (!Validator.isAlpha(name)) {
    errors.name = 'Oops!!! can ONLY be alphabet';
  }

  return errors;
}

export const CreateUserValidator = (user) => {
  const errors = {};

  if(Validator.isEmpty(user.title)) {
    errors.title = 'This field is required'
  }
  if (Validator.isEmpty(user.staffId)) {
    errors.staffId = 'This field is required';
  } 
  if (!Validator.contains(user.staffId, 'SM')) {
    errors.staffId = 'Oops!!! Invalid StaffId must contain "SM"';
  }
  if (Validator.isEmpty(user.phonenumber)) {
    errors.phonenumber = 'This field is required';
  } else if (!Validator.isMobilePhone(user.phonenumber)) {
    errors.phonenumber = 'Oops!!! Invalid input';
  }
  if(Validator.isEmpty(user.fullname)) {
    errors.fullname = 'This field is required'
  }
  return errors;
}