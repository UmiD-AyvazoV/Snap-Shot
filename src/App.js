import "./App.css";
import { useEffect, useState } from "react";
import Photos from './components/Photos';
import Form from "./components/Form";

function App(props) {

  const [photos, setPhotos] = useState([]);
  const [text, setText] = useState("All");

  useEffect( () => {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        process.env.REACT_APP_API_KEY +
        "&tags=nyc&per_page=1000&page=1&format=json&nojsoncallback=1"
    )
    .then( res => res.json() )
    .then((data) => {
      const photos = data.photos.photo.map((p) => {
        return {
          id: p.id,
          url: `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_m.jpg`,
        };
      });
      setPhotos(photos);
    });
  }, [] );

  function handleFilter(tag) {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        process.env.REACT_APP_API_KEY +
        "&tags=" +
        tag +
        "&per_page=1000&page=1&format=json&nojsoncallback=1"
    )
      .then((res) => res.json())
      .then((data) => {
        const photos =
          data.photos &&
          data.photos.photo.map((p) => {
            return {
              id: p.id,
              url: `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_m.jpg`,
            };
          });
        setPhotos(photos || []);
        setText(tag);
      });
  }


  return (
    <div>
      <Form handleFilter={handleFilter} />
      <Photos text={text} photos={photos} />
    </div>
  )
}
 
  
export default App;