import mongoose, { Schema } from 'mongoose'

const menusSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  restaurantId: {
    type: String
  },
  products: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

menusSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      price: this.price,
      restaurantId: this.restaurantId,
      products: this.products,
      image: this.image,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Menus', menusSchema)

export const schema = model.schema
export default model
