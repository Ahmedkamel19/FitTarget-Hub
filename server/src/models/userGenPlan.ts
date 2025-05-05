import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const userGenPlanSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  genPlan: {
    type: String,
    required: true,
  },
});

export default mongoose.model('UserGenPlan', userGenPlanSchema);


