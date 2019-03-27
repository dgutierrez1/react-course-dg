
// @flow
import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../config/baseUrl'


export const fetchProducts = async (dispatch) => {
  dispatch(productsLoading());

  const response = await fetch(baseUrl + 'products')
  if(response.ok) {
    const products = await response.json();
    setTimeout(() => {
      dispatch(addProducts(products))
    }, 2000)
  }
  
  var error = new Error('Error ' + response.status + ': ' + response.statusText);
  error.response = response;
  dispatch(productsFailed(error.message))     
}

export const productsLoading = () => ({
  type: ActionTypes.PRODUCTS_LOADING
})

export const productsFailed = (errmess) => ({
  type: ActionTypes.PRODUCTS_FAILED,
  payload: errmess
})

export const addProducts = (products) => ({
  type: ActionTypes.ADD_PRODUCTS,
  payload: products
})

export const addProduct = (product) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: product
})

export const selectProduct = product => ({
  type: ActionTypes.SELECT_PRODUCT,
  product
})

export const unSelectProduct = product => ({
  type: ActionTypes.UNSELECT_PRODUCT,
  product
})

export const showAddProductModal = (showModal) => ({
  type: ActionTypes.SHOW_ADD_PRODUCT_MODAL,
  payload: showModal
})