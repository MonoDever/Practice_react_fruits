import React, { useState } from 'react'
import {useSearchCar} from '../Data/FetchData'
import TopBar from './TopBar'
export default function App() {

  const [cars, setCar] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl22P8wJvmJM4DgcJfEWcfJ0OToJK8gsCY65IGLH-o2P6BzL8B1pCH2k67mx4RgXIlde8&usqp=CAU");

  const data = useSearchCar();

  function setNewCar() {
    const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl22P8wJvmJM4DgcJfEWcfJ0OToJK8gsCY65IGLH-o2P6BzL8B1pCH2k67mx4RgXIlde8&usqp=CAU"
    const img2 = "https://cdn.pixabay.com/photo/2019/10/19/03/50/bmw-4560531_1280.jpg"
    console.log(cars);
    if (cars === img1) {
      setCar(img2);
    } else {
      setCar(img1);
    }
  }

  function carTab() {
    return (
       <div class='Section-one'>
         <img className='Img-car' src={cars} alt='cars' ></img>
       </div>
    );
  }

  return (
    <div>
      <TopBar/>
      <div class='Section-one'>
         <img className='Img-car' src={cars} alt='cars' ></img>
       </div>
       <div className='grid-container'>
          <div>1</div>
          <div style={{ textAlign:'center' }}>
          <button onClick={() => setNewCar()} style={{ height: '50px', width: '100px', verticalAlign: 'middle', cursor: 'pointer', textAlign: 'center' }} >newcar</button>
          </div>
          <div>3</div>
       </div>

      
      <table style={{ border: '1px solid black' }}>
        <tr >
          <th style={{ width: '150px' }}>Name</th>
          <th style={{ width: '150px' }}>Image</th>
        </tr>

        {
          data.map(d => (
            <tr style={{ textAlign: 'center' }}>
              <td>{d.name}</td>
              <td><img width='50px' height='50px' alt='' src={d.linkImage} /></td>
            </tr>
          ))}


      </table>
    </div>
  )
}
