import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

 const Home=({movies})=> {
  // console.log(props)
  // let {movies}=props;
  // console.log(movies)
  const router=useRouter()
  return (
    <main className={styles.container}>
   
       <h1>hello home</h1>
       {movies.map((movie)=>(
       <div key={movie.id}>
          <Link href={`/${movie.id}`}>{movie.Title}</Link>
          {/* {movie.Title} */}
       </div>
       ))}
    </main>
  )
}

 export async function getStaticProps(){
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
     return{
      props:{
        movies:data
      }
     }
 }
export default Home