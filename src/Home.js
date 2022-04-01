import React from 'react'
import { useHistory } from 'react-router-dom' // allowing us to use the history saved in the browser


export default function Home() {
  const history = useHistory();

//   const routeToShop = () => {
//     history.push("/item-list");
//   }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src="../Assets/Pizza.jpg"
        alt=''
      />
      <button
        // onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}