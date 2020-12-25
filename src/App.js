import React,{useState,useEffect} from "react";
import "./styles.css";
import Loading from './Loading';
import Tours from './Tours';
const url='https://course-api.com/react-tours-project'
export default function App() {
  const [isLoading,setLoading]=useState(true);
  const [tours,setTours]=useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchResults = async()=>{
    setLoading(true)
    const response=await fetch(url)
    const tours=await response.json()
    setLoading(false)
    setTours(tours)
    console.log(tours);
  }
  useEffect(()=> {fetchResults()},[])
  
  if(isLoading){
    return (
    <main>
      <Loading/>
      </main>)
  }
  if(tours.length===0){
    return (
      <main>
    <h1>No Tours </h1>
    <button class="btn" onClick={()=>fetchResults()}>Refresh</button>
    </main>
    )
  }
  return (
    <main>
      <h1>OUR TOURS</h1>
  <Tours tours={tours} removeTour={removeTour}/>
  </main>
    )
}
