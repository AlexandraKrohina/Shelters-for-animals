import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import main_dog from './Images/main_dog.png';
// import dogs_for_news from './Images/dogs_for_news.jpg';
import Shelters from './Shelters';
import AboutUs from './AboutUs';
import News from './News';
import Main from './Main';



function M() {
  return (

    <>
      <div className='main_dog'>
        <img src={main_dog} alt="Бродячая собака"/>
      </div>

    <BrowserRouter>
      <Routes>
        <Route path="main" element={<Main/>}/>
        <Route path="shelters" element={<Shelters/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="news" element={<News/>}/>
      </Routes>
    </BrowserRouter>

    
    <h3 className='main'><a href="http://localhost:3000">Главная</a></h3>
    <h3><a href="http://localhost:3000/shelters">Приюты</a></h3>
    <h3><a href="http://localhost:3000/about">О нас</a></h3>
    <h3><a href="http://localhost:3000/news">Новости</a></h3> 

    {/* <div className="card">
      <img src={dogs_for_news} className="card-img-top" alt="Собаки в клетке"/>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>  
     */}
    
    </>
  );
}

export default M;