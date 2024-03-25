import React from 'react'
import './Home.css'
import LastTrips from '../components/LastTrips'
import Weather from '../components/Weather.js'
import forumData from '../datas/storysData.js'


function Home() {
  return (
    <div className='home-main-container'>

      <div className='news-container'>
        <LastTrips forumData={forumData}/>
        <Weather/>
      </div>
    
    </div>
  )
}

export default Home