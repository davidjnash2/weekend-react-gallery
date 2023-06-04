import react from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, getGalleryItems }) {
    console.log('in GalleryList function on GalleryListjsx, and GalleryList is:', GalleryList);



	return (
		<>
			<div>
				{galleryList.map((item) => (
					<GalleryItem key={item.id} item={item} getGalleryItems={getGalleryItems}/>
				))}
			</div>
		</>
	);
}



export default GalleryList;