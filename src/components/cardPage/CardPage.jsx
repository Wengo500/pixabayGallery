import './scss/cardPage.scss';
import Tag from '../photoCards/Tag';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';



const CardPage = ({jsonObj, cardId}) =>{
  if(jsonObj.length > 0) localStorage.jsonObj = JSON.stringify(jsonObj)
  if(cardId > 0 ) localStorage.cardId = JSON.stringify(cardId)
  
  let jsonObjLocalStor = JSON.parse( localStorage.jsonObj );
  let cardIdLocalStor = JSON.parse( localStorage.cardId );
  const selectedObj = jsonObjLocalStor.find(el => el.id === cardIdLocalStor)

  return (
    <div className="card-page">
      {selectedObj.tags.split(',').map((el, id)=> <Tag tagName={el} key={id} />)}
      <img className="card-page__img" src={selectedObj.webformatURL} alt="web format img" />
      <div className="statistics"> 
        <ThumbUpAltOutlinedIcon /> {selectedObj.likes} 
        <SmsOutlinedIcon className="comments-margin"/> {selectedObj.comments}
      </div>
      <div className="photo-information" style={{left: selectedObj.webformatWidth + 30}}>
        <p className="user">user: {selectedObj.user}</p>
        <p className="user">views: {selectedObj.views}</p>
        <p className="user">downloads: {selectedObj.downloads}</p>
        <p className="user">collections: {selectedObj.collections}</p>
        <p className="user">image width: {selectedObj.imageWidth}</p>
        <p className="user">image height: {selectedObj.imageHeight}</p>
        <p className="user">image size: {selectedObj.imageSize}</p>
      </div>
    </div>
  )
};

export default CardPage