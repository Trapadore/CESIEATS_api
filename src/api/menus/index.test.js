import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Menus } from '.'

const app = () => express(apiRoot, routes)

let userSession, menus

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  userSession = signSync(user.id)
  menus = await Menus.create({})
})

test('POST /menus 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, name: 'test', price: 'test', restaurantId: 'test', products: 'test', image: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.restaurantId).toEqual('test')
  expect(body.products).toEqual('test')
  expect(body.image).toEqual('test')
})

test('POST /menus 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /menus 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /menus 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /menus/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${menus.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(menus.id)
})

test('GET /menus/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${menus.id}`)
  expect(status).toBe(401)
})

test('GET /menus/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /menus/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${menus.id}`)
    .send({ access_token: userSession, name: 'test', price: 'test', restaurantId: 'test', products: 'test', image: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(menus.id)
  expect(body.name).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.restaurantId).toEqual('test')
  expect(body.products).toEqual('test')
  expect(body.image).toEqual('test')
})

test('PUT /menus/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${menus.id}`)
  expect(status).toBe(401)
})

test('PUT /menus/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: userSession, name: 'test', price: 'test', restaurantId: 'test', products: 'test', image: 'test' })
  expect(status).toBe(404)
})

test('DELETE /menus/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${menus.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /menus/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${menus.id}`)
  expect(status).toBe(401)
})

test('DELETE /menus/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})
