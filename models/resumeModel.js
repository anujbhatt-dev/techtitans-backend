const mongoose = require('mongoose');

// Define the schema for the resume
const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  education: [
    {
      degree: {
        type: String,
        required: true,
      },
      university: {
        type: String,
        required: true,
      },
      startYear: {
        type: Number,
      },
      endYear: {
        type: Number,
      },
    },
  ],
  skills: [
    {
      name: {
        type: String,
        required: true,
      },
      level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Beginner',
      },
    },
  ],
  experiences: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
      },
      description: {
        type: String,
      },
    },
  ],
  projects: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      technologies: {
        type: [String],
      },
    },
  ],
  certifications: [
    {
      title: {
        type: String,
        required: true,
      },
      issuer: {
        type: String,
        required: true,
      },
      dateEarned: {
        type: Date,
      },
    },
  ],
  interests: {
    type: [String],
  },
},{
    timestamps:{
        currentTime: () => Math.floor(Date.now() + 5.5 * 60 * 60 * 1000)
    }
});

// Create the Resume model based on the schema
const Resume = mongoose.model('Resume', resumeSchema);

// Export the model to be used in other parts of the application
module.exports = Resume;
