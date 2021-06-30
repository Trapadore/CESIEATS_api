import mongoose, { Schema } from 'mongoose'
const orderState = [1, 2, 3, 4, 5]
const operationsSchema = new Schema({
  userId: {
    type: String
  },
  restaurantId: {
    type: String
  },
  delivererId: {
    type: String
  },
  orderContent: {
    type: Object
  },
  orderState: {
    type: Number,
    enum: orderState
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

operationsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      restaurantId: this.restaurantId,
      delivererId: this.delivererId,
      orderContent: this.orderContent,
      orderState: this.orderState,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Operations', operationsSchema)

export const schema = model.schema
export default model
