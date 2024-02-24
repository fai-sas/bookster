import mongoose from 'mongoose'

const Authors = mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Authors || mongoose.model('Authors', Authors)
