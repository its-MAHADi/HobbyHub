import React from 'react'
import { useLoaderData } from 'react-router'
import Allgrp from '../components/Allgrp';

const AllGroups = () => {
    const allData = useLoaderData();
    console.log(allData)
  return (
    <div>
     <Allgrp></Allgrp>
    </div>
  )
}

export default AllGroups
