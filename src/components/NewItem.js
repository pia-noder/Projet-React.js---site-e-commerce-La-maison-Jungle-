//style
import '../styles/Newitem.css'

import React, { useEffect } from 'react';

function NewItem ({index, newPlant}){
    const plant = newPlant;
    const indexParse = JSON.stringify({index})
    const indexItem = JSON.parse(indexParse)

    useEffect(() => {
        //Si l'index est un nombre paire alors appliquer la class even à l'élément
        let isEven = false;
        //Vérifier si l'index est un nombre pair
       if(indexItem.index % 2 === 0 ){
          return isEven =  true;
           
       } else{
            return isEven =  false;   
       }
      });
    return(
            <figure className='lmj-newPlant'>
                <img className='lmj-newPlant-cover' src={plant.cover} alt='plante à vendre'/>
                <figcaption className='lmj-newPlant-legend'>
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                </figcaption>
                
                
            </figure>

    )
}

export default NewItem;