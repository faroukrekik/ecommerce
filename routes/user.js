const express = require("express");
const { registerRules, Validatorr } = require("../middlewares/validator");
const {
  register,
  login,
  auth,
  Forget_Password,
  editpassword,
  delcookie,
  edituser,
} = require("../controllers/user.controller");
const { verifyAuth } = require("../middlewares/verifAuth");
const config = require("config");
const passport = require("passport");

const router = express.Router();

router.post("/register", registerRules(), Validatorr, register);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.post("/forgetPassword", Forget_Password);
router.post("/reset-password/:id/:token", editpassword);
router.get("/logout", delcookie);
router.put("/update-user/:id", edituser);

// OAuth with Google
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(`${config.get("client_url")}/success`);
  }
);

// OAuth with Facebook
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(`${config.get("client_url")}/success`);
  }
);

// Return JWT after successful OAuth (frontend should call this)
router.get("/oauth/success", (req, res) => {
  if (!req.user) return res.status(401).json({ msg: "Not authenticated" });
  const jwt = require("jsonwebtoken");
  const config = require("config");
  const token = jwt.sign({ _id: req.user._id }, config.get("secret"), {
    expiresIn: "1h",
  });
  res.json({
    token,
    user: { _id: req.user._id, name: req.user.name, email: req.user.email },
  });
});

module.exports = router;
