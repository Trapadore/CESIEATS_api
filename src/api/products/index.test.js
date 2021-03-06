import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Products } from '.'

const app = () => express(apiRoot, routes)

let userSession, products

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  userSession = signSync(user.id)
  products = await Products.create({})
})

test('POST /products 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, name: 'test', price: 'test', productType: 'test', image: 'test', restaurantId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.productType).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.restaurantId).toEqual('test')
})

test('POST /products 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /products 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /products 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /products/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${products.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(products.id)
})

test('GET /products/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${products.id}`)
  expect(status).toBe(401)
})

test('GET /products/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /products/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${products.id}`)
    .send({ access_token: userSession, name: 'test', price: 'test', productType: 'test', image: 'test', restaurantId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(products.id)
  expect(body.name).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.productType).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.restaurantId).toEqual('test')
})

test('PUT /products/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${products.id}`)
  expect(status).toBe(401)
})

test('PUT /products/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: userSession, name: 'test', price: 'test', productType: 'test', image: 'test', restaurantId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /products/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${products.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /products/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${products.id}`)
  expect(status).toBe(401)
})

test('DELETE /products/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})
