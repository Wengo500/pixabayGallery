import React, { useRef, useState } from 'react';
import './scss/photoCard.scss';
import { useDispatch } from 'react-redux';
import {changeTagJsonObjActionCreator} from '../../redux/reducers/jsonObjReducer';

import Tag from './Tag';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

export default React.memo(

  function PhotoCard({previewURL, tags, likes, comments, cardId}) {
    const dispatch = useDispatch();
    const newTagName = useRef(null)
    const [createdTagName, setCreatedTegName] = useState()
    const [hiddenInput, setHiddenInput] = useState(true)
    const onButtonUp = () => setCreatedTegName(newTagName.current.value); 
    
    const tagKeyPress = (event) => {  
      if(event.code === 'Enter') {
        dispatch(changeTagJsonObjActionCreator(cardId, createdTagName))
        setHiddenInput(!hiddenInput)
        newTagName.current.value = ''
      }
    }
   
    return (
      <div className="photoCard">
        <img className="preview" src={previewURL} alt="preview img" />
      
        <div className="statistics"> 
          <ThumbUpAltOutlinedIcon /> {likes} 
          <SmsOutlinedIcon className="comments-margin"/> {comments}
        </div>
        {tags.split(',').map((el, id)=> 
          <div  
            className="tagWrapper"
            onDoubleClick={(event)=> {
              setHiddenInput(!hiddenInput)
              event.preventDefault()
            }} 
            onClick={(event)=>event.preventDefault()} 
            key={id} 
          >
            <Tag tagName={el} />
          </div>
        )}
        <input 
          style={{display: `${hiddenInput === true ? 'none' : 'block'}`}}
          onKeyUp={onButtonUp}
          onKeyPress={tagKeyPress} 
          onClick={(event)=>event.preventDefault()} 
          className="create-tag-input" ref={newTagName} />
      </div>
    );
  }
)