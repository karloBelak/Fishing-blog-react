import React from 'react'
import '../components/LastTrips.css'
import { Link } from 'react-router-dom'


function LastTrips({forumData}) {
 
    return (
    <div className='news'>
      <h3 className='lastTrips-title'>
        Nedavno
      </h3>
        {forumData.slice(0, 3).map((data, index) => (
        <div key={index} className='card'>
            <div className='card-photo-main'>
                 <img src={data.img} alt={data.title} className='image-card'/>
            </div>
            <div className='card-text'>
                <h3 className='card-title'>{data.title}</h3>   
                <p>{data.desc}</p>
                {/* <p>{data.id}</p> */}
                <Link to={`/forum/card/${data.id}`}><button className='btn-open'>Cijeli tekst</button></Link>
            </div>
        </div>
      ))}
    </div>

  )
}


export default LastTrips