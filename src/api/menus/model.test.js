import { Menus } from '.'

let menus

beforeEach(async () => {
  menus = await Menus.create({ name: 'test', price: 'test', restaurantId: 'test', products: 'test', image: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = menus.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(menus.id)
    expect(view.name).toBe(menus.name)
    expect(view.price).toBe(menus.price)
    expect(view.restaurantId).toBe(menus.restaurantId)
    expect(view.products).toBe(menus.products)
    expect(view.image).toBe(menus.image)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = menus.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(menus.id)
    expect(view.name).toBe(menus.name)
    expect(view.price).toBe(menus.price)
    expect(view.restaurantId).toBe(menus.restaurantId)
    expect(view.products).toBe(menus.products)
    expect(view.image).toBe(menus.image)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
