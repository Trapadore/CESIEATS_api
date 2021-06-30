import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy, showByRestaurant } from './controller'
import { schema } from './model'
export Products, { schema } from './model'

const router = new Router()
const { name, price, productType, image, restaurantId } = schema.tree

/**
 * @api {post} /products Create products
 * @apiName CreateProducts
 * @apiGroup Products
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Products's name.
 * @apiParam price Products's price.
 * @apiParam productType Products's productType.
 * @apiParam image Products's image.
 * @apiParam restaurantId Products's restaurantId.
 * @apiSuccess {Object} products Products's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Products not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ name, price, productType, image, restaurantId }),
  create)

/**
 * @api {get} /products Retrieve products
 * @apiName RetrieveProducts
 * @apiGroup Products
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of products.
 * @apiSuccess {Object[]} rows List of products.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /products/:id Retrieve products
 * @apiName RetrieveProducts
 * @apiGroup Products
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} products Products's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Products not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /products/:id Update products
 * @apiName UpdateProducts
 * @apiGroup Products
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Products's name.
 * @apiParam price Products's price.
 * @apiParam productType Products's productType.
 * @apiParam image Products's image.
 * @apiParam restaurantId Products's restaurantId.
 * @apiSuccess {Object} products Products's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Products not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, price, productType, image, restaurantId }),
  update)

/**
 * @api {delete} /products/:id Delete products
 * @apiName DeleteProducts
 * @apiGroup Products
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Products not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

/**
 * @api {get} /products/byrestaurants/:restaurantId Retrieve products by restaurant
 * @apiName RetrieveProductsByRestaurant
 * @apiGroup Products
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} products Products's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Products not found.
 * @apiError 401 user access only.
 */
router.get('/byrestaurant/:restaurantId',
  token({ required: true }),
  showByRestaurant)

export default router
