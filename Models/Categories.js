import mongoose from 'mongoose'

const Categories = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the author name'],
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

export default mongoose.models.Categories ||
  mongoose.model('Categories', Categories)
