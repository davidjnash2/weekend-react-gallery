import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';


function App() {

  const [galleryList, setGalleryList] = useState([]);

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
        })


    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList GalleryList={GalleryList} getGalleryItems={getGalleryItems}/>
        {/* <GalleryItem /> */}
      </div>
    );
}

export default App;
