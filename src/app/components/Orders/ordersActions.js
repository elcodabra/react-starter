import BackendService from '../../services/backend';

export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export const RECIEVE_ORDERS = 'RECIEVE_ORDERS';
export const REQUEST_ORDER = 'REQUEST_ORDER';
export const RECIEVE_ORDER = 'RECIEVE_ORDER';

const backendService = new BackendService();

export const selectOrders = () => (dispatch, getState) => {
  dispatch({
    type: REQUEST_ORDERS,
  })
  return backendService.getOrders().then((response) => {
    dispatch({
      type: RECIEVE_ORDERS,
      orders: response.data,
      receivedAt: Date.now()
    })
  })
}

export const getOrder = (id) => (dispatch, getState) => {
  dispatch({
    type: REQUEST_ORDER,
  })
  return backendService.getOrder(id).then((response) => {
    dispatch({
      type: RECIEVE_ORDER,
      orders: response.data,
      receivedAt: Date.now()
    })
  })
}