import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Restaurants, { schema } from './model'

const router = new Router()
const { name, address, image, description } = schema.tree

/**
 * @api {post} /restaurants Create restaurants
 * @apiName CreateRestaurants
 * @apiGroup Restaurants
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Restaurants's name.
 * @apiParam address Restaurants's address.
 * @apiParam image Restaurants's image.
 * @apiParam description Restaurants's description.
 * @apiSuccess {Object} restaurants Restaurants's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurants not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ name, address, image, description }),
  create)

/**
 * @api {get} /restaurants Retrieve restaurants
 * @apiName RetrieveRestaurants
 * @apiGroup Restaurants
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of restaurants.
 * @apiSuccess {Object[]} rows List of restaurants.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /restaurants/:id Retrieve restaurants
 * @apiName RetrieveRestaurants
 * @apiGroup Restaurants
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} restaurants Restaurants's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurants not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /restaurants/:id Update restaurants
 * @apiName UpdateRestaurants
 * @apiGroup Restaurants
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Restaurants's name.
 * @apiParam address Restaurants's address.
 * @apiParam image Restaurants's image.
 * @apiParam description Restaurants's description.
 * @apiSuccess {Object} restaurants Restaurants's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurants not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, address, image, description }),
  update)

/**
 * @api {delete} /restaurants/:id Delete restaurants
 * @apiName DeleteRestaurants
 * @apiGroup Restaurants
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Restaurants not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
