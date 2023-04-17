import mongoose from 'mongoose';

const jobschema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    employer: { type: String, required: true },
    employerEmail: {type: String, required: true},
    slug: { type: String, required: true, trim: true },
    location: {type: String, required: true},
    jobtype: {type: String, required: true},
    requirements: {type: String, required: true},
    qualifications: {type: String, required: true},
    responsibilities: {type: String, required: true},
    description: {type: String, required: true},
    category: { type: String, required: true },

    

   
  },
  {
    timestamps: true,
  }
);

const JobListing =
  mongoose.models.JobListing || mongoose.model('JobListing', jobschema);
export default JobListing;
