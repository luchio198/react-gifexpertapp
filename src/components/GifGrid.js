import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

    // const apiKey = 'elf5So3HNxiuW1WBOqel2gGQfIvqLWwF';
    // const giphyEndpoint = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const { data:images, loading } = useFetchGifs( category );
    
    //console.log(loading);
    // useEffect( () => {

    //     getGifts( category )
    //         //.then( imgs => setImages(imgs)); // Se puede hacer así o sino asi:
    //         .then( setImages )

    // }, [ category ])

  return (
    <>
        <h3> {category} </h3>

        { loading && <p>Loading...</p> }
        <div className='card-grid'>
            
            {
                images.map( ( img ) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
            
        </div>
    </>
    
  )
}
