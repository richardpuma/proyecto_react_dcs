import Axios from "axios"
import { GET_ALL_POSTS, GET_ALL_PRODUCTS, GET_POST, GET_PRODUCT } from "./actions"

const API_URL=process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch => { 
  Axios.get(`${API_URL}/posts`)
  .then(resp=>{
      return dispatch({
        type: GET_ALL_POSTS,
        posts:resp.data
      })
    }
  )
}

export const getAllProducts = () => dispatch => { 
  Axios.get(`${API_URL}/products`)
  .then(resp=>{
      return dispatch({
        type: GET_ALL_PRODUCTS,
        products:resp.data
      })
    }
  )
}

export const getPost = (id) => dispatch => { 
  Axios.get(`${API_URL}/posts/${id}`)
  .then(resp=>{
      return dispatch({
        type: GET_POST,
        post:resp.data
      })
    }
  )
}

export const getProduct = (id) => dispatch => { 
  Axios.get(`${API_URL}/products/${id}`)
  .then(resp=>{
      return dispatch({
        type: GET_PRODUCT,
        product:resp.data
      })
    }
  )
}
