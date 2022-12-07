import React from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'

const Movie = ({movie}) => {

  const handleClick=(movie)=>{
      let response=axios.post(`http://localhost:8080/watchlist`,movie).then((res)=>{
        console.log("afterpost", res)
      })
  }
  const router=useRouter();
  return (
    <div>
      <button onClick={()=>handleClick(movie)}>
        {movie.Title}
        </button>
      
    </div>
  )
}

export async function getStaticPaths(){
    // console.log(context)
    const response=await fetch("http://localhost:8080/movies")
    let data= await response.json();
    return {
      paths:  data.map((movie)=>({params:{id:movie.id.toString()}})) ,
      fallback: false, // can also be true or 'blocking'
    }
  }

export async function getStaticProps(context){
    console.log(context)
    const {
        params:{id},
       }=context;
    const response=await fetch(`http://localhost:8080/movies/${id}`)
    let data= await response.json();
    console.log(data,"data")
    return{
     props:{
       movie:data
     }
    }
}
export default Movie
