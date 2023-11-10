import { useState } from 'react'
import './App.css'
import icon from './assets/Group 2.jpg'
import icon2 from './assets/Group 3.jpg'
import photo1 from './assets/Rectangle 1-1.jpg'
import photo2 from './assets/Rectangle 1-2.jpg'
import photo3 from './assets/Rectangle 1.jpg'
import photo4 from './assets/Rectangle 2-1.jpg'
import photo5 from './assets/Rectangle 2-2.jpg'
import photo6 from './assets/Rectangle 2.jpg'
import photo7 from './assets/Rectangle 3-1.jpg'
import photo8 from './assets/Rectangle 3-2.jpg'
import photo9 from './assets/Rectangle 3.jpg'
import photo10 from './assets/Rectangle 4-1.jpg'
import photo11 from './assets/Rectangle 4-2.jpg'
import photo12 from './assets/Rectangle 4.jpg'
import photo13 from './assets/Rectangle 5.jpg'
import photo14 from './assets/Rectangle 6.jpg'
import photo15 from './assets/Rectangle 7.jpg'
import photo16 from './assets/Rectangle 8.jpg'
import photo17 from './assets/Rectangle 9.jpg'
import photo18 from './assets/Rectangle 10.jpg'
import photo19 from './assets/Rectangle 11.jpg'
import photo20 from './assets/Rectangle 12.jpg'


const photos = [
  { id: 1, url: photo1, caption: 'Engagement Ring 1', price:'$101.00' },
  { id: 2, url: photo2, caption: 'Engagement Ring 2', price:'$102.00' },
  { id: 3, url: photo3, caption: 'Engagement Ring 3', price:'$103.00' },
  { id: 4, url: photo4, caption: 'Engagement Ring 4', price:'$104.00' },
  { id: 5, url: photo5, caption: 'Engagement Ring 5', price:'$105.00' },
  { id: 6, url: photo6, caption: 'Engagement Ring 6', price:'$106.00'},
  { id: 7, url: photo7, caption: 'Engagement Ring 7', price:'$107.00' },
  { id: 8, url: photo8, caption: 'Engagement Ring 8', price:'$108.00' },
  { id: 9, url: photo9, caption: 'Pendants 1', price:'$109.00' },
  { id: 10, url: photo10, caption: 'Pendants 2', price:'$110.00' },
  { id: 11, url: photo11, caption: 'Pendants 3', price:'$111.00' },
  { id: 12, url: photo12, caption: 'Pendants 4', price:'$112.00' },
  { id: 13, url: photo13, caption: 'Pendants 6', price:'$113.00' },
  { id: 14, url: photo14, caption: 'Pendants 7', price:'$114.00' },
  { id: 15, url: photo15, caption: 'Pendants 8', price:'$115.00' },
  { id: 16, url: photo16, caption: 'Pendants 9', price:'$116.00' },
  { id: 17, url: photo17, caption: 'bridal set 1', price:'$117.00' },
  { id: 18, url: photo18, caption: 'bridal set 2', price:'$118.00' },
  { id: 19, url: photo19, caption: 'bridal set 3', price:'$119.00' },
  { id: 20, url: photo20, caption: 'bridal set 4', price:'$120.00' },
]

function App() {
  
  return (
    <div className='container'>
      <div className="header">
        <div className="logo">
          <h1>MY JEWELRY STORE</h1>
        </div>
        <div className="nav">
          <img src={icon2} alt="" />
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="products">
    {photos.map((foto) => (
      <div key={foto.id} className="product">
        <img className='productImage' src={foto.url} alt={foto.caption} />
        <p className='productName'>{foto.caption}</p>
        <p className='productPrice'>{ foto.price }</p>
      </div>
    ))}
      </div>
      <div className="footer">
        <div className="whoweare">
          <h5>We Contribute to the Global Reforestation</h5>
        </div>
        <div className="foot">
        We plant a tree for each order together with One Tree Planted, A non-profit Organization <br />
which proceeds the global reforestation act simultaneously in North America, Latin America, <br />

Asia, Africa, Europe and the Pacific in 47+ Countries.
        </div>
      </div>
  </div>
  )
}

export default App
