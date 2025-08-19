const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const config = require("config");
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (e) {
    done(e);
  }
});

// Google
passport.use(
  new GoogleStrategy(
    {
      clientID: config.get("google_client_id"),
      clientSecret: config.get("google_client_secret"),
      callbackURL: "/user/auth/google/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const existing = await User.findOne({ googleID: profile.id });
        if (existing) return done(null, existing);
        // create new
        const user = await User.create({
          name: profile.displayName,
          email: profile.email,
          image: profile.picture,
          googleID: profile.id,
        });
        done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);

// Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: config.get("facebook_app_id"),
      clientSecret: config.get("facebook_app_secret"),
      callbackURL: "/user/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existing = await User.findOne({ facebookID: profile.id });
        if (existing) return done(null, existing);
        const email =
          Array.isArray(profile.emails) && profile.emails[0]
            ? profile.emails[0].value
            : undefined;
        const photo =
          Array.isArray(profile.photos) && profile.photos[0]
            ? profile.photos[0].value
            : undefined;
        const user = await User.create({
          name: profile.displayName,
          email,
          image: photo,
          facebookID: profile.id,
        });
        done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);



