import axios from 'axios';
import {jsonObjActionCreator} from '../reducers/jsonObjReducer';


const URL = 'https://pixabay.com/api/?key=22631130-8412d42dbc4bfaad2112d2e09&q=cats&image_type=all&per_page=100'

export const getCard = () => {
  return async(dispatch) => {
   await axios.get(URL)

    .then((response) => {
      if (response.data !== undefined) dispatch(jsonObjActionCreator(response.data.hits))
      })
    .catch(() => console.log('Error'))
  }
}