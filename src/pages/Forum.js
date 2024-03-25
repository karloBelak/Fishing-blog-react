import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Forum.css'
import { useState } from 'react'
import forumData from '../datas/storysData.js'


function Forum() {
  const [selectedCategory, setSelectedCategory] = useState(null);


  function filterByCategory(category){
    setSelectedCategory(category);
  };

  const filteredForumData = selectedCategory
    ? forumData.filter((data) => data.category === selectedCategory)
    : forumData;

    function up(){
      window.scrollTo({
        top: 0
      })
    }

  return (
    <div className='forum'>
      <h1 className='forum-title'>Forum</h1>
      <div className='filter-categories'>
        <button className='filter-btn' onClick={() => filterByCategory(null)}>Sve</button>
        <button className='filter-btn' onClick={() => filterByCategory('stuka')}>Štuka</button>
        <button className='filter-btn' onClick={() => filterByCategory('saran')}>Šaran</button>
        <button className='filter-btn' onClick={() => filterByCategory('ul')}>UltraLight</button>
        <button className='filter-btn' onClick={() => filterByCategory('ostalo')}>Ostalo</button>
      </div>
        <div className='forum-cards-container'> 
          {filteredForumData.map((story) => {
            return(
              <div className='forum-card' key={story.id}>
                <div className='img-title-desc'>
                  <img className='card-img' alt={story.title} src={story.img}/>
                  <div className='card-text'>
                    <h3>{story.title.toUpperCase()}</h3>
                    <p>{story.desc}</p>
                  </div>
                </div>
                  <div className='date-btn'>
                    <p>{story.date}</p>
                  {/* <Link to='card'><button className='btn-read-more'>Cijeli tekst</button></Link> */}
                  <Link to={`card/${story.id}`} className='btn-read-more' onClick={up}>Cijeli tekst</Link>
                  </div>
              </div>
            )
          })}
        </div>
      <Outlet/>
    </div>
  );
}

export default Forum;