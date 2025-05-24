import React from 'react'
import { useLoaderData } from 'react-router'
import HobbySlider from '../components/HobbySlider';
import Featured from '../components/Featured';
import WhyPeopleLoveHobbyHub from '../components/WhyPeopleLoveHobbyHub';
import HobbyCommunity from '../components/HobbyCommunity';

const Home = () => {
    const hobbysData = useLoaderData();
    // console.log(hobbysData)
  return (
    <div>
      <HobbySlider hobbys={hobbysData} ></HobbySlider>
      <Featured key={hobbysData._id} hobbysCards={hobbysData}></Featured>
      <HobbyCommunity></HobbyCommunity>
      <WhyPeopleLoveHobbyHub></WhyPeopleLoveHobbyHub>
    </div>
  )
}

export default Home
