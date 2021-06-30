import { success, notFound } from '../../services/response/'
import { Menus } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Menus.create(body)
    .then((menus) => menus.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Menus.count(query)
    .then(count => Menus.find(query, select, cursor)
      .then((menus) => ({
        count,
        rows: menus.map((menus) => menus.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Menus.findById(params.id)
    .then(notFound(res))
    .then((menus) => menus ? menus.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Menus.findById(params.id)
    .then(notFound(res))
    .then((menus) => menus ? Object.assign(menus, body).save() : null)
    .then((menus) => menus ? menus.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Menus.findById(params.id)
    .then(notFound(res))
    .then((menus) => menus ? menus.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const showByRestaurant = ({ params }, res, next) =>
  Menus.aggregate([{ $match: { restaurantId: params.restaurantId } }])
    .then(notFound(res))
    .then((menus) => menus)
    .then(success(res))
    .catch(next)
