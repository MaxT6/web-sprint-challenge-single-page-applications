import React from 'react'
import { useHistory } from 'react-router-dom' // allowing us to use the history saved in the browser


export default function Home() {
  const history = useHistory();

  const orderPizza = () => {
    history.push("/pizza");
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=''
      />
      <button
        onClick={orderPizza}
        className='md-button shop-button'
      >
        Pizza?
      </button>
    </div>
  )
}