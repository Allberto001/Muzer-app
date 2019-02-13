const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = require('./Profile');

const MusicianProfileSchema = new Schema({

    firstName: { type: String, require: true },

    lastName: { type: String, require: true },

    city: { type: String, require: true },

    genres: [{ type: String, require: true }],

    instruments: [{ type: String, require: true }]
});

let Musician = ProfileSchema.discriminator("Musician", MusicianProfileSchema);
module.exports = Musician;