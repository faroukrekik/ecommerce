const express = require("express");
const { registerRules, Validatorr } = require("../middlewares/validator");
const {
  register,
  login,
  auth,
  Forget_Password,
  editpassword,
  delcookie,
} = require("../controllers/user.controller");
const { verifyAuth } = require("../middlewares/verifAuth");

const router = express.Router();

router.post("/register", registerRules(), Validatorr, register);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.post("/forgetPassword", Forget_Password);
router.post("/reset-password/:id/:token", editpassword);
router.get("/logout", delcookie);

module.exports = router;
