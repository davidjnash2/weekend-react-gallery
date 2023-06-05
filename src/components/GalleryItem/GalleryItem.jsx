import axios from 'axios';
import { useState } from 'react';


function GalleryItem({ item, getGalleryItems }) {
	
    const [clicked, setClick] = useState(true);

    const likeItem = () => {
		axios.put(`/gallery/like/${item.id}`)
			.then((response) => {
				console.log(response);
				getGalleryItems();
			}).catch((error) => {
				console.log(error);
			});
	};

    console.log('in GalleryItem function on GalleryItemjsx, and item is:', item);

   return (
        <>
		<div onClick={()=>setClick(!clicked)} >{clicked ? 
			    (<img src={item.path}/>) :
          (<div>{item.description}</div>)}
        </div>
        <div>
          <div><button onClick={likeItem}>❤️❤️❤️❤️❤️</button></div>
        <p>{item.likes} people love this</p>
        </div>
        </>
	);
}




export default GalleryItem;