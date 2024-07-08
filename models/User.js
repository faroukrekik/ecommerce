const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  password: String,
  image: String,
  registerDate: {
    type: Date,
    default: Date.now,
  },
  googleID: {
    type: String,
  },
  githubID: {
    type: String,
  },
  facebookID: {
    type: String,
  },
  linkedinID: {
    type: String,
  },

  userRole: {
    type: String,
    default: "User",
    roles: ["User", "Admin"],
  },
});

module.exports = mongoose.model("User", userSchema);
