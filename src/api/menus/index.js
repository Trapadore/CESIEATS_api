import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy, showByRestaurant } from './controller'
import { schema } from './model'
export Menus, { schema } from './model'

const router = new Router()
const { name, price, restaurantId, products, image } = schema.tree

/**
 * @api {post} /menus Create menus
 * @apiName CreateMenus
 * @apiGroup Menus
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Menus's name.
 * @apiParam price Menus's price.
 * @apiParam restaurantId Menus's restaurantId.
 * @apiParam products Menus's products.
 * @apiParam image Menus's image.
 * @apiSuccess {Object} menus Menus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menus not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ name, price, restaurantId, products, image }),
  create)

/**
 * @api {get} /menus Retrieve menus
 * @apiName RetrieveMenus
 * @apiGroup Menus
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of menus.
 * @apiSuccess {Object[]} rows List of menus.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /menus/:id Retrieve menus
 * @apiName RetrieveMenus
 * @apiGroup Menus
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} menus Menus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menus not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /menus/:id Update menus
 * @apiName UpdateMenus
 * @apiGroup Menus
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Menus's name.
 * @apiParam price Menus's price.
 * @apiParam restaurantId Menus's restaurantId.
 * @apiParam products Menus's products.
 * @apiParam image Menus's image.
 * @apiSuccess {Object} menus Menus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menus not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, price, restaurantId, products, image }),
  update)

/**
 * @api {delete} /menus/:id Delete menus
 * @apiName DeleteMenus
 * @apiGroup Menus
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Menus not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

/**
 * @api {get} /menus/byrestaurant/:restaurantId Retrieve menus by restaurant
 * @apiName RetrieveMenusByRestaurant
 * @apiGroup Menus
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} menus Menus's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Menus not found.
 * @apiError 401 user access only.
 */
router.get('/byrestaurant/:restaurantId',
  token({ required: true }),
  showByRestaurant)

export default router
