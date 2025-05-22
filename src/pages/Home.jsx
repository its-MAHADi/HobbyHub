import React from 'react'
import { useLoaderData } from 'react-router'
import HobbySlider from '../components/HobbySlider';
import Featured from '../components/Featured';

const Home = () => {
    const hobbysData = useLoaderData();
    // console.log(hobbysData)
  return (
    <div>
      <HobbySlider hobbys={hobbysData} ></HobbySlider>
      <Featured key={hobbysData._id} hobbysCards={hobbysData}></Featured>
    </div>
  )
}

export default Home
