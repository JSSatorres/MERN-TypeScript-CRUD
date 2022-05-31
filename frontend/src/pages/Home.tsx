import React from 'react'
import Navbar from '../components/navbar'
import VideoList from '../components/videoList'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="mx-5">
        <VideoList />
      </div>
    </>
  )
}

export default Home