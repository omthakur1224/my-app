import React from 'react'

import { useRouter } from 'next/router'
import axios from 'axios'

const Movie = ({movie}) => {

  const handleClick=(movie)=>{
      // let response=axios.post(`http://localhost:8080/watchlist`,movie).then((res)=>{
      //   console.log("afterpost", res)
      // })
      data.push(movie)
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
    // const response=await fetch("http://localhost:8080/movies")
    let data= [
      {
        "Title": "Titanic",
        "id": 1,
        "rating": 5
      },
      {
        "Title": "Avengers",
        "id": 2,
        "rating": 5
      },
      {
        "Title": "End Game",
        "id": 3,
        "rating": 5
      },
      {
        "Title": "Wakanda",
        "id": 4,
        "rating": 5
      }
    ]
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
    // const response=await fetch(`http://localhost:8080/movies/${id}`)
    let movies= [
      {
        "Title": "Titanic",
        "id": 1,
        "rating": 5
      },
      {
        "Title": "Avengers",
        "id": 2,
        "rating": 5
      },
      {
        "Title": "End Game",
        "id": 3,
        "rating": 5
      },
      {
        "Title": "Wakanda",
        "id": 4,
        "rating": 5
      }
    ]
    let data=movies.filter((d)=>d.id==id)
    console.log(data,"data")
    return{
     props:{
       movie:data
     }
    }
}
export default Movie
