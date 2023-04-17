import mongoose from 'mongoose';

const directoryschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    detail: { type: String, required: true },
    mobile: { type: String, required: true },
    image: { type: String, required: true },
    address: {type: String, required: true},
    city: { type: String, required: true },
    location: {type: String, required: true},
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    
    
   
  },
  {
    timestamps: true,
  }
);

const Listing =
  mongoose.models.Listing || mongoose.model('Listing', directoryschema);
export default Listing;
