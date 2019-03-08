import Validator from 'validator';

const LogInValidator = (user) => {
  const errors = {};

  if (Validator.isEmpty(user.staffId)) {
    errors.staffId = 'Staff Id field is required';
  } else if (!Validator.contains(user.staffId, 'SM')) {
    errors.staffId = 'Invalid staffId format';
  }
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  }
  // } else if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$', 'g').test(user.password)) {
  //   errors.password = 'Password must be at least 8 characters, 1 uppercase letter, 1 number';
  // }
  return errors;
};
export default LogInValidator;

// export const CreateUserValidation = (user) => {
//   const errors = {};
//   if (Validator.isEmpty(user.staffId)) {
//     errors.staffId = 'Staff Id field is required';
//   } else if (!Validator.contains(user.staffId, 'SM')) {
//     errors.staffId = 'Invalid staffId format';
//   }
// };
