// import axios from 'axios';
// import { useState } from 'react';


// function GalleryItem({ item, getGalleryItems }) {
	
//     const [flip, setFlip] = useState(false);

//     const likeItem = () => {
// 		axios.put(`/gallery/like/${item.id}`)
// 			.then((response) => {
// 				console.log(response);
// 				getGalleryItems();
// 			}).catch((error) => {
// 				console.log(error);
// 			});
// 	};

//     console.log('in GalleryItem function on GalleryItemjsx, and item is:', item);

//    return (
//         <>
// 		<div>
//             <img
// 			    onClick={() => setFlip(!flip)}
//                 src={flip ?  item.path : item.description}/>
//         </div>
// 		<div> 
//             <button onClick={likeItem}>❤️❤️❤️❤️❤️❤️</button>
// 			<p>{item.likes} people ❤️ this!</p>
// 		</div>
//         </>
// 	);
// }




// export default GalleryItem;