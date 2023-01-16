import validator from 'validator';
const emailValidate = (email: string) => {
  return validator.isEmail(email);
};

export { emailValidate };
