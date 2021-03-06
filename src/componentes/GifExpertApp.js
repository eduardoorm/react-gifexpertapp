import React from 'react'
import { useState} from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

const GifExpertApp = () => {
//    const categories=['One Punch','Samurai X','Dragon Ball'];
   const [categories, setCategories] = useState(['One Punch'])
   
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
              {
                 categories.map(category=>
                    <GifGrid key={category} category={category}/>
                )
              }
           </ol>
        </>
    )
}

export default GifExpertApp
