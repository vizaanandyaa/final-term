import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

import { MainContent } from './components/MainContent';
import './App.css'
import { VideoDetail } from './pages/VideoDetail';
import { useState,useEffect } from 'react';

function App() {
  const [datas, setDatas] = useState([])
  useEffect(()=>{
      fetch('http://localhost:3001/getVideos')
      .then((r) => r.json())
      .then((item) => setDatas(item))
      .catch((error) => console.log('eror'))
  },[]);
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent {...datas}/>}/>
         {datas.map((data)=>{
           return(
            <>  
              <Route path= {`/videos/${data._id}`} element={<VideoDetail id={data._id} text={data.title} link={data.link} prod_photo={data.prod_photo}/>}/>
            </>
          )
         })}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
