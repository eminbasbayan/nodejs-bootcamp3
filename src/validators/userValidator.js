const { body } = require("express-validator");

const userValidationRules = {
  email: body("email")
    .trim()
    .isEmail()
    .withMessage("Geçerli bir email adresi girin.")
    .normalizeEmail()
    .toLowerCase(),

  password: body("password")
    .isLength({ min: 6 })
    .withMessage("Şifre en az 6 karakter olmalıdır.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
    .withMessage(
      "Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir."
    ),

  name: body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("İsim en az 2, en fazla 50 karakter olmalıdır."),
};


module.exports = userValidationRules;