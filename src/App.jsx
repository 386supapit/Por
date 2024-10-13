import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom'; 

const parks = [
  {
    name: 'อุทยานแห่งชาติดอยอินทนนท์',
    image: '/inthanont.jpg',
  },
  {
    name: 'อุทยานแห่งชาติดอยสุเทพ-ปุย',
    image: '/suthep-pui.jpg',
  },
  {
    name: 'อุทยานแห่งชาติดอยผ้าห่มปก',
    image: '/phahompok.jpg',
  },
  {
    name: 'อุทยานแห่งชาติออบหลวง',
    image: '/obluang.jpg',
  },
  {
    name: 'อุทยานแห่งชาติห้วยน้ำดัง',
    image: '/huainamdang.jpg',
  },
  {
    name: 'อุทยานแห่งชาติเชียงดาว',
    image: '/chiangdao.jpg',
  },
  {
    name: 'อุทยานแห่งชาติดอยหลวง',
    image: '/doiluang.jpg',
  },
  {
    name: 'อุทยานแห่งชาติดอยเวียงผา',
    image: '/wiangpha.jpg',
  },
  {
    name: 'อุทยานแห่งชาติแม่วาง',
    image: '/maewang.jpg',
  },
  {
    name: 'อุทยานแห่งชาติออบขาน',
    image: '/obkhan.jpg',
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
              <h2 className="text-xl font-semibold text-black text-center">{park.name}</h2>
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
