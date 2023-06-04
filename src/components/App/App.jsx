import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';


function App() {

  const [GalleryList, setGalleryList] = useState([]);

  useEffect(()=>{
      getGalleryItems()
  },[]);


  const getGalleryItems = () =>{
    axios.get('/gallery')
      .then((response) => {
        console.log(response.data);
        setGalleryList(response.data)
      }).catch((error) => {
        console.log(error);
      });
  }

  console.log ('in Appjsx, and GalleryList is:', GalleryList);
  
  // function GalleryItem({ item, getGalleryItems }) {
	
    const [flip, setFlip] = useState(false);

    const likeItem = () => {
		axios.put(`/gallery/like/${item.id}`)
			.then((response) => {
				console.log(response);
				getGalleryItems();
			}).catch((error) => {
				console.log(error);
			});
	// };






  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* <GalleryList GalleryList={GalleryList} getGalleryItems={getGalleryItems}/> */}
     
      {/* <> */}
			<div>
                <h3>My Gallery</h3>
				
			</div>
			<div>
				{GalleryList.map((item) => (
					<GalleryItem key={item.id} item={item} getGalleryItems={getGalleryItems}/>
				))}
			</div>
		{/* </>
      <> */}
		<div>
            <img
			    onClick={() => setFlip(!flip)}
                src={flip ?  item.path : item.description}/>
        </div>
		<div> 
            <button onClick={likeItem}>❤️❤️❤️❤️❤️❤️</button>
			<p>{item.likes} people ❤️ this!</p>
		</div>
        {/* </> */}
    
    </div>
  );
}
}
export default App;
