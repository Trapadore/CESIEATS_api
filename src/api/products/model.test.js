import { Products } from '.'

let products

beforeEach(async () => {
  products = await Products.create({ name: 'test', price: 'test', productType: 'test', image: 'test', restaurantId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = products.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(products.id)
    expect(view.name).toBe(products.name)
    expect(view.price).toBe(products.price)
    expect(view.productType).toBe(products.productType)
    expect(view.image).toBe(products.image)
    expect(view.restaurantId).toBe(products.restaurantId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = products.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(products.id)
    expect(view.name).toBe(products.name)
    expect(view.price).toBe(products.price)
    expect(view.productType).toBe(products.productType)
    expect(view.image).toBe(products.image)
    expect(view.restaurantId).toBe(products.restaurantId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
