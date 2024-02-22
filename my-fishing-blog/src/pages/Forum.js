import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Forum.css'
import { useState } from 'react'
import forumData from '../datas/storysData.js'

// const forumData = [
//   {
//     id:1,
//     title: 'Međimurske pastrve',
//     img: require('../photos-forum/trout.jpg'),
//     desc:'Dnevni izlet na poznati pastrvski kanal u srcu Međimurja...',
//     date: '13.01.2024',
//     category:'ul'
//   },
//   {
//     id:2,
//     title: 'Kamačnik, natjecanje u ribolovu mladica',
//     img: require('../photos-forum/kupa.jpg'),
//     desc:'Vrhunska atmosfera, niske temperature, kilometri kupe, tisuće zabaca, 12 ekipa, 2 dana, ciljana riba, Mladica!',
//     date: '08.01.2024',
//     category:'ostalo'
//   },
//   {
//     id:3,
//     title: 'Zimsko načačkavanje štuka',
//     img: require('../photos-forum/zimska-štuka.jpg'),
//     desc:'Hladno vrijeme se odrazilo na štuke, znatno su usporile, ali manje gume i spora akcija spasavaju dan',
//     date: '01.01.2024',
//     category:'stuka'
//   },
//   {
//     id:4,
//     title: 'Ultralight glavonje',
//     img: require('../photos-forum/glavonja.jpg'),
//     desc:'Klen => muha, guma, vobler you name it',
//     date: '15.10.2024',
//     category:'ul'
//   },
//   {
//     id:5,
//     title: 'PikeMaster Final',
//     img: require('../photos-forum/pikemasters.jpg'),
//     desc:'Borba za postolje u PikeMasters ligi',
//     date: '10.10.2024',
//     category:'stuka'
//   },
//   {
//     id:6,
//     title: 'Homemade vobleri',
//     img: require('../photos-forum/hobi.jpg'),
//     desc:'Pripreme za duge zimske dane kad priroda ne dozvoli izlaske na vodu',
//     date: '12.20.2024',
//     category:'ostalo'
//   },
//   {
//     id:7,
//     title: 'Jedna noc je dosta',
//     img: require('../photos-forum/boila.jpg'),
//     desc:'Petak direkt s posla trk u prenatrpan auto i gas na vodi, cilj, odlovit do subote ujutro i ulovit barem jednog šarana',
//     date: '13.09.2024',
//     category:'saran'
//   },
//   {
//     id:8,
//     title: 'Odransko zlato',
//     img: require('../photos-forum/grgo-odra.jpg'),
//     desc:'Odra i njezini simpatični razbojnici',
//     date: '26.10.2024',
//     category:'ul'
//   },
//   {
//     id:9,
//     title: 'Pastrve na GO',
//     img: require('../photos-forum/pastrva.jpg'),
//     desc:'Iskoristi zadnje dane prek dugi lovostaj',
//     date: '29.09.2024',
//     category:'ul'
//   },
//   {
//     id:10,
//     title: 'Sava krpa sava',
//     img: require('../photos-forum/sava.jpg'),
//     desc:'Vrućina ne popusta, u manjku inspiracije, gacamo po savi u potrazi za kakvom ribom',
//     date: '11.09.2024',
//     category:'ul',
//   },
//   {
//     id:11,
//     title: 'Divljaci counts more',
//     img: require('../photos-forum/divljaci.jpg'),
//     desc:'Ribolov šarana na divljim i obraslim vodama',
//     date: '25.08.2024',
//     category:'saran'
//   },
//   {
//     id:12,
//     title: 'Zubate aktivne',
//     img: require('../photos-forum/aktivne.jpg'),
//     desc:'Mislis travanj, mislim listopad/studeni, a najbolji je mozda ipak kolovoz?',
//     date: '13.01.2024',
//     category:'stuka'
//   }
// ]


function Forum() {
  const [selectedCategory, setSelectedCategory] = useState(null);


  function filterByCategory(category){
    setSelectedCategory(category);
  };

  const filteredForumData = selectedCategory
    ? forumData.filter((data) => data.category === selectedCategory)
    : forumData;


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
                    <h3>{story.title}</h3>
                    <p>{story.desc}</p>
                  </div>
                </div>
                  <div className='date-btn'>
                    <p>{story.date}</p>
                  {/* <Link to='card'><button className='btn-read-more'>Cijeli tekst</button></Link> */}
                  <Link to={`card/${story.id}`} className='btn-read-more'>Cijeli tekst</Link>
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