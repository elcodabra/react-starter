import {
  REQUEST_ORDERS,
  RECIEVE_ORDERS,
} from './ordersActions'

export function ordersReducer(
  state = {
    orders: [],
    isFetching: false,
  },
  action
) {
  switch (action.type) {
    case REQUEST_ORDERS:
      return { ...state, isFetching: true }
    case RECIEVE_ORDERS:
      return { ...state, isFetching: false, orders: action.orders, lastUpdated: action.receivedAt }
    default:
      return state
  }
}
