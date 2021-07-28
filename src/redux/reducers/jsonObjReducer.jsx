const NEW_JSON = 'NEW_JSON';
const CHANGE_TAG_JSON = 'CHANGE_TAG_JSON';
 

const initialState = []
const jsonObjReducer = (state=initialState, action) => {

  switch(action.type) {  
    case NEW_JSON:
      return action.payload

    case CHANGE_TAG_JSON:
      const newTagObj = state.find(el=> el.id === action.cardId)
      newTagObj.tags += ', ' + action.tagName

    let newState = state
    state.forEach((el, id) => el.id === action.cardId ? newState.splice(id, 1) : newState)
    
      return [...newState, newTagObj]
    default: 
      return state;
  }

}
export const jsonObjActionCreator = (cards) => ({type: NEW_JSON, payload: cards})
export const changeTagJsonObjActionCreator = (cardId, tagName) => (
  {
    type: CHANGE_TAG_JSON, 
    cardId: cardId, 
    tagName: tagName
})

export default jsonObjReducer;