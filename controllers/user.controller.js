const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const nodemailer = require("nodemailer");

exports.register = async (req, res) => {
  const { name, email, phone, address, password, registerDate, userRole } =
    req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(409).json({ msg: "user aleardy exist" });
  }
  try {
    const newUser = new User({
      name,
      email,
      phone,
      address,
      password,
      registerDate,
      userRole,
    });
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);
    newUser.password = hash;

    await newUser.save();

    const payload = {
      _id: newUser._id,
    };
    let token = jwt.sign(payload, secret);
    return res.status(201).send({
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "wrong information" });
    }

    // 2. Compare passwords
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ msg: "wrong information" });
    }

    // 3. Create JWT payload
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      registerDate: user.registerDate,
      userRole: user.userRole,
    };

    // 4. Generate token
    const token = jwt.sign(payload, secret, { expiresIn: "1h" }); // Added expiration

    // 5. Send successful response
    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ msg: "Server error" });
  }
};
exports.auth = (req, res) => {
  console.log(req.user);
  res.send(req.user);
};

exports.Forget_Password = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) res.status(404).json({ msg: "User not existed" });

  try {
    const payload = {
      _id: user._id,
    };
    let token = await jwt.sign(payload, secret, { expiresIn: "1d" });

    var transporter = await nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: "faroukrekik23@gmail.com",
        pass: "wtlz rybs kjkr jdus",
      },
    });

    var mailOptions = {
      from: "faroukrekik23@gmail.com",
      to: email,
      subject: "Reset your password",
      text: `http://localhost:3000/reset-password/${user.id}/${token}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
    res.status(200).json({ msg: "Email has been sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "server error" });
  }
};

exports.editpassword = async (req, res) => {
  const { id, token } = req.params;

  const { password } = req.body;

  const veriftoken = jwt.verify(token, secret);
  if (!veriftoken) res.status(409).json({ msg: "Error with token" });

  try {
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);

    const newpassword = await User.findByIdAndUpdate(
      req.params.id,
      {
        password: hash,
      },
      { new: true }
    );

    res.send(newpassword);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.delcookie = async (req, res) => {
  await res.clearCookie("connect.sid");
  await res.redirect("/");
};

exports.authgoogle = (req, res) => {
  res.send(req.usergoogle);
};

exports.edituser = async (req, res) => {
  try {
    const updateuser = await User.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    res.send(updateuser);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};
