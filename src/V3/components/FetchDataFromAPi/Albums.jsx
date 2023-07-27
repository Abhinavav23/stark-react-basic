import React, { useEffect, useState } from 'react'

export const Albums = () => {
  const [albums, setAlbums] = useState([])
  const fetchAlbums = async() => {
    try{
      const resp = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await resp.json();
      setAlbums(data)
    }catch(err){
      console.log('err', err);
    }
  }

  useEffect(() => {
    console.log('running useEffect');
    // async function fetchAlbums(){}
    fetchAlbums();
  },[]);
  
  return (
   <main>
     <h3>Albums</h3>
     {albums.map(({title, id}) => {
        return <div key={id}>{title}</div>
     })}
   </main>
  )
}
