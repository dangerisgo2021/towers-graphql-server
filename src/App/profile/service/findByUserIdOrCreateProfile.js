const { createProfile } = require("../repo/createProfile.js");
const { findByUserId } = require("../repo/findByUserId");

const createInitialProfile = ({ userId }) => ({
  userId,
  created: new Date().getTime(),
  updated: new Date().getTime(),
  rating: 2000,
});

exports.findByUserIdOrCreateProfile = async ({ userId }) => {
  let profile = await findByUserId({ userId });
  if (!profile) {
    profile = await createProfile(createInitialProfile({ userId }));
  }
  return profile;
};
