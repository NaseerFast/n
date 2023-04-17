import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productid: {type: Number, default: 0},
    gender: { type: String, required: true },
    category: { type: String, required: true},
    subcategory: { type: String, required: true},
    producttype: { type: String, required: true},
    colour: { type: String, required: true},
    usage: { type: String, required: true},
    name: { type: String, required: true},
    image: { type: String, required: true},
    slug: { type: String, required: true},
    price:  { type: Number, required: true},
    description: { type: String, required: true },
    rating: { type: Number,   },
    countInStock: { type: Number,  default: 0 },
    brand: { type: String, required: true},
    reviews: { type: Number,  },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
