import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Operations, { schema } from './model'

const router = new Router()
const { userId, restaurantId, delivererId, orderContent, orderState } = schema.tree

/**
 * @api {post} /operations Create operations
 * @apiName CreateOperations
 * @apiGroup Operations
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam userId Operations's userId.
 * @apiParam restaurantId Operations's restaurantId.
 * @apiParam delivererId Operations's delivererId.
 * @apiParam orderContent Operations's orderContent.
 * @apiParam orderState Operations's orderState.
 * @apiSuccess {Object} operations Operations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Operations not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ userId, restaurantId, delivererId, orderContent, orderState }),
  create)

/**
 * @api {get} /operations Retrieve operations
 * @apiName RetrieveOperations
 * @apiGroup Operations
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of operations.
 * @apiSuccess {Object[]} rows List of operations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /operations/:id Retrieve operations
 * @apiName RetrieveOperations
 * @apiGroup Operations
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} operations Operations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Operations not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /operations/:id Update operations
 * @apiName UpdateOperations
 * @apiGroup Operations
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam userId Operations's userId.
 * @apiParam restaurantId Operations's restaurantId.
 * @apiParam delivererId Operations's delivererId.
 * @apiParam orderContent Operations's orderContent.
 * @apiParam orderState Operations's orderState.
 * @apiParam createdAt Operations's createdAt.
 * @apiSuccess {Object} operations Operations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Operations not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ userId, restaurantId, delivererId, orderContent, orderState }),
  update)

/**
 * @api {delete} /operations/:id Delete operations
 * @apiName DeleteOperations
 * @apiGroup Operations
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Operations not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
