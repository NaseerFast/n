import mongoose from 'mongoose';

const tenderschema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    employer: { type: String, required: true },
    employerEmail: {type: String, required: true},
    slug: { type: String, required: true, trim: true, index: true, unique: true },
    location: {type: String, required: true},
    jobtype: {type: String, required: true},
    requirements: {type: String, required: true},
    qualifications: {type: String, required: true},
    description: {type: String, required: true},
    category: { type: String, required: true },

  },
  {
    timestamps: true,
  }
);

const TenderListing =
  mongoose.models.TenderListing || mongoose.model('TenderListing', tenderschema);
export default TenderListing;
