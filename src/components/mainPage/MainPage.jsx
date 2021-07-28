import {useEffect, useState, memo} from 'react';
import { useDispatch } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import './scss/mainPage.scss';

import Header from '../header/Header'
import PhotoCard from '../photoCards/PhotoCard'
import {getCard} from '../../redux/thunks/getJsonThunk';

export default memo(

 function MainPage({jsonObj, setCardId}) {

  const dispatch = useDispatch()
  const [sortBy, setSortBy] = useState()
  const [inputTagRef, setInputTagRef] = useState('')
  
  const filterCardsByTagName = () => 
   jsonObj.filter(el => el.tags.includes(inputTagRef.toLowerCase())).sort((a, b) => a[sortBy] < b[sortBy] ? 1 : -1)
   
  useEffect(() => {
    dispatch(getCard())
  }, [dispatch])
  
  return (
    <div className="MainPage">
      <Header setSortBy={setSortBy} setInputTagRef={setInputTagRef}/>
        <div className="photo-card__container">
          {filterCardsByTagName().map(el => 
            <HashLink 
              onClick={()=>setCardId(el.id)}
              img={el.largeImageURL}
              to="/CardPage" 
              style={{ textDecoration: 'none', width: '25%' }} 
              key={el.id}>
              <PhotoCard
                cardId={el.id}
                previewURL={el.webformatURL}
                tags={el.tags}
                likes={el.likes}
                comments={el.comments}
              />
            </HashLink>
          )}
        </div>
    </div>
  );
}
)