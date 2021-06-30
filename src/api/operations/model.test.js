import { Operations } from '.'

let operations

beforeEach(async () => {
  operations = await Operations.create({ userId: 'test', restaurantId: 'test', delivererId: 'test', orderContent: 'test', orderState: 'test', createdAt: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = operations.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(operations.id)
    expect(view.userId).toBe(operations.userId)
    expect(view.restaurantId).toBe(operations.restaurantId)
    expect(view.delivererId).toBe(operations.delivererId)
    expect(view.orderContent).toBe(operations.orderContent)
    expect(view.orderState).toBe(operations.orderState)
    expect(view.createdAt).toBe(operations.createdAt)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = operations.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(operations.id)
    expect(view.userId).toBe(operations.userId)
    expect(view.restaurantId).toBe(operations.restaurantId)
    expect(view.delivererId).toBe(operations.delivererId)
    expect(view.orderContent).toBe(operations.orderContent)
    expect(view.orderState).toBe(operations.orderState)
    expect(view.createdAt).toBe(operations.createdAt)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
