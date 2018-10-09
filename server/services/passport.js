const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/devKeys");
const {User} = require('../db')


passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
passport.deserializeUser((id, done) => {
  User.findOne({where: {id}}).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: keys.GOOGLE_CALLBACK_URL,
    scope: ['email'],
  },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({where: { googleId: profile.id }});
      if (existingUser) {
        done(null, existingUser);
      } else {
        console.log(profile)
        const user = await User.create({ 
          googleId: profile.id,
          email: profile.emails[0].value
        });
        done(null, user);
      }
    }
  )
);