import { success, notFound } from '../../services/response/'
import { Operations } from '.'
import { Menus } from '../menus'

export const create = ({ bodymen: { body } }, res, next) => {
  let check = true
  body.orderContent.menus.forEach(menu => {
    const rsltMenu = Menus.findById(menu)
    if (rsltMenu.restaurantId != menu.restaurantId) {
      check = false
    }
  })
  if (check){
    Operations.create(body)
      .then((operations) => operations.view(true))
      .then(success(res, 201))
      .catch(next)
  }
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Operations.count(query)
    .then(count => Operations.find(query, select, cursor)
      .then((operations) => ({
        count,
        rows: operations.map((operations) => operations.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) => {
  Operations.findById(params.id)
    .then(notFound(res))
    .then((operations) => operations ? operations.view() : null)
    .then(success(res))
    .catch(next)
}

export const update = ({ bodymen: { body }, params }, res, next) =>
  Operations.findById(params.id)
    .then(notFound(res))
    .then((operations) => operations ? Object.assign(operations, body).save() : null)
    .then((operations) => operations ? operations.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Operations.findById(params.id)
    .then(notFound(res))
    .then((operations) => operations ? operations.remove() : null)
    .then(success(res, 204))
    .catch(next)
