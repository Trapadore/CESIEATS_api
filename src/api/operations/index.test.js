import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Operations } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, operations

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  operations = await Operations.create({})
})

test('POST /operations 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, userId: 'test', restaurantId: 'test', delivererId: 'test', orderContent: 'test', orderState: 'test', createdAt: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.restaurantId).toEqual('test')
  expect(body.delivererId).toEqual('test')
  expect(body.orderContent).toEqual('test')
  expect(body.orderState).toEqual('test')
  expect(body.createdAt).toEqual('test')
})

test('POST /operations 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /operations 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /operations 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /operations/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${operations.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(operations.id)
})

test('GET /operations/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${operations.id}`)
  expect(status).toBe(401)
})

test('GET /operations/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /operations/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${operations.id}`)
    .send({ access_token: adminSession, userId: 'test', restaurantId: 'test', delivererId: 'test', orderContent: 'test', orderState: 'test', createdAt: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(operations.id)
  expect(body.userId).toEqual('test')
  expect(body.restaurantId).toEqual('test')
  expect(body.delivererId).toEqual('test')
  expect(body.orderContent).toEqual('test')
  expect(body.orderState).toEqual('test')
  expect(body.createdAt).toEqual('test')
})

test('PUT /operations/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${operations.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /operations/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${operations.id}`)
  expect(status).toBe(401)
})

test('PUT /operations/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: adminSession, userId: 'test', restaurantId: 'test', delivererId: 'test', orderContent: 'test', orderState: 'test', createdAt: 'test' })
  expect(status).toBe(404)
})

test('DELETE /operations/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${operations.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /operations/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${operations.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /operations/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${operations.id}`)
  expect(status).toBe(401)
})

test('DELETE /operations/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
