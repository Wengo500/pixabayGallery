import { useRef } from 'react';
import './scss/header.scss';

function Header({setSortBy, setInputTagRef}) {
  const inputTag = useRef();
  const onButtonUp = () => {
    setTimeout(()=>{
      setInputTagRef(inputTag.current.value)
    },300)
  };
  
  return (
    <div className="header">
      <div className="btn-wrapper">
        <span onClick={() => setSortBy('likes')} className="filterLikes">Likes</span>
        <span onClick={() => setSortBy('comments')} className="filterComments">Comments</span>
      </div>
      <input onKeyUp={onButtonUp} className="inputFilter" type="text"  ref={inputTag}  placeholder='Input tag name for filter'/>
    </div>
  );
}

export default Header;
