interface Props{
    id:number;
    Title:string;
    Actors:string[];
    Country:string;
    Poster:string;
}

import React from 'react'
// async function getData(){
//     const res = await fetch('https://auth.mrshanas.me/?format=openapi')

//     if(!res.ok){
//         throw new Error('Invalid')
//     }

//     return res.json()
// }

const FetchUrl =  ({test}:{test:Props}) => {
    // const data = await getData()
    // if(data){
    //     console.log(data)
    // }
  return (
    <div className='pt-12 justify-center items-center flex flex-col'>
   
      <img src={`${test.Poster}`}   alt=""/>
      <p>{test.Title}</p>
      <p>{test.Actors}</p>
      <p>{test.Country}</p>
      </div>
  )
}

export default FetchUrl