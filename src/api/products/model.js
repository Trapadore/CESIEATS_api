import mongoose, { Schema } from 'mongoose'

const productsSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  productType: {
    type: String
  },
  image: {
    type: String
  },
  restaurantId: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

productsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      price: this.price,
      productType: this.productType,
      image: this.image,
      restaurantId: this.restaurantId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Products', productsSchema)

export const schema = model.schema
export default model
