import React from 'react'
import { useLoaderData } from 'react-router'
import HobbySlider from '../components/HobbySlider';

const Home = () => {
    const hobbysData = useLoaderData();
    console.log(hobbysData)
  return (
    <div>
      <HobbySlider hobbys={hobbysData} ></HobbySlider>
    </div>
  )
}

export default Home
