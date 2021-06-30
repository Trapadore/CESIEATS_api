import { Restaurants } from '.'

let restaurants

beforeEach(async () => {
  restaurants = await Restaurants.create({ name: 'test', address: 'test', image: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = restaurants.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(restaurants.id)
    expect(view.name).toBe(restaurants.name)
    expect(view.address).toBe(restaurants.address)
    expect(view.image).toBe(restaurants.image)
    expect(view.description).toBe(restaurants.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = restaurants.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(restaurants.id)
    expect(view.name).toBe(restaurants.name)
    expect(view.address).toBe(restaurants.address)
    expect(view.image).toBe(restaurants.image)
    expect(view.description).toBe(restaurants.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
