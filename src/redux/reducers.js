import { GET_ALL_POSTS, GET_POST, GET_ALL_PRODUCTS, GET_PRODUCT } from "./actions"

export const postReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts
    }
  }

  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post
    }
  }
  return state
}

export const ProductReducer = (state = {}, action) => {
  if (action.type === GET_ALL_PRODUCTS) {
    return {
      ...state,
      products: action.products
    }
  }

  if (action.type === GET_PRODUCT) {
    return {
      ...state,
      product: action.product
    }
  }
  return state
}
