import mongoose, { Types } from 'mongoose'

const Books = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide  book name'],
    },
    author: {
      type: String,
      required: [true, 'Please provide  book name'],
    },
    category: {
      type: String,
      required: [true, 'Please provide  category name'],
      enum: [
        'Fiction',
        'Non-Fiction',
        'Science Fiction',
        'Fantasy',
        'Mystery',
        'Thriller',
        'Romance',
        'Historical Fiction',
        'Biography',
        'Self-Help',
        'Children',
      ],
    },
    description: {
      type: String,
      required: [true, 'Please provide description '],
    },
    isbn: {
      type: String,
      required: [true, 'Please provide isbn number'],
    },
    edition: {
      type: Number,
      default: 1,
    },
    language: {
      type: String,
      trim: true,
    },
    format: {
      type: String,
      required: [
        true,
        'Please provide format (HardCover/Paperback/Audiobook/e-book) ',
      ],
      enum: ['Hardcover', 'Paperback', 'Audiobook', 'E-book'],
    },
    pages: {
      type: Number,
      min: 1,
    },
    stock: {
      type: Number,
      required: [true, 'Please provide stock quantity'],
      default: 1,
      min: 1,
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
      min: 0.01,
    },
    image: {
      type: [String],
      required: [true, 'Please provide book image'],
    },
    createdByUserId: {
      type: String,
      required: [true, 'Please provide user Id'],
    },
    createdByUserName: {
      type: String,
      required: [true, 'Please provide user name'],
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reviews',
      },
    ],
  },

  {
    timestamps: true,
  }
)

export default mongoose.models.Books || mongoose.model('Books', Books)
