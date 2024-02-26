import mongoose from 'mongoose'

const Authors = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the author name'],
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    image: {
      type: [String],
      required: [true, 'Please provide the author image'],
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

export default mongoose.models.Authors || mongoose.model('Authors', Authors)
