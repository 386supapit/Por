import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom'; 
import park1 from './assets/1.jpg';
import park2 from './assets/2.jpg';
import park3 from './assets/3.jpg';
import park4 from './assets/4.jpg';
import park5 from './assets/5.jpg';
import park6 from './assets/6.jpg';
import park7 from './assets/7.jpg';
import park8 from './assets/8.jpg';
import park9 from './assets/9.jpg';
import park10 from './assets/10.jpg';

const parks = [
  {
    name: 'อุทยานแห่งชาติดอยผ้าห่มปก',
    image: park1,
  },
  {
    name: 'อุทยานแห่งชาติดอยสุเทพ-ปุย',
    image: park2,
  },
  {
    name: 'อุทยานแห่งชาติดอยอินทนนท์',
    image: park3,
  },
  {
    name: 'อุทยานแห่งชาติออบหลวง',
    image: park4,
  },
  {
    name: 'อุทยานแห่งชาติห้วยน้ำดัง',
    image: park5,
  },
  {
    name: 'อุทยานแห่งชาติขุนขาน',
    image: park6,
  },
  {
    name: 'อุทยานแห่งชาติผาแดง',
    image: park7,
  },
  {
    name: 'อุทยานแห่งชาติศรีลานนา',
    image: park8,
  },
  {
    name: 'อุทยานแห่งชาติแม่ตะไคร้',
    image: park9,
  },
  {
    name: 'อุทยานแห่งชาติแม่วาง',
    image: park10,
  },
];


function Home() {
  return (
    <div className="container mx-auto p-4">
      <ImageSlider /> 
      <h1 className="text-3xl font-bold mb-4">อุทยานในเชียงใหม่</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {parks.map((park) => (
          <div key={park.name} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/park/${park.name}`}>
              <img src={park.image} alt={park.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
              <h2 className="text-xl font-semibold text-white text-center">{park.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black"> {/* เพิ่ม bg-black ที่นี่ */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
}


export default App;
