import mongoose, { Schema } from 'mongoose'

const restaurantsSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

restaurantsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      address: this.address,
      image: this.image,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Restaurants', restaurantsSchema)

export const schema = model.schema
export default model
