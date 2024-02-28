import mongoose from 'mongoose'

const Reviews = mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, 'Please provide author name'],
    },
    rating: {
      type: Number,
      required: [true, 'Please provide rating'],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, 'Please provide comment'],
      trim: true,
    },
    createdByUserId: {
      type: String,
      required: [true, 'Please provide user Id'],
    },
    createdByUserName: {
      type: String,
      required: [true, 'Please provide user name'],
    },
  },

  {
    timestamps: true,
  }
)

export default mongoose.models.Reviews || mongoose.model('Reviews', Reviews)
