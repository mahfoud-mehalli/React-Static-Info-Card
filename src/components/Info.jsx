import React from 'react'

function Info() {
  return (
    <div className='info'>
        <div className='img'/>
        <h1>Mahfoud MEHALLI</h1>
        <h3>Frontend Developer</h3>
        <h5>mahfoudmehalli12345@gmail.com</h5>
        <div className="btn">
            <button className='email'>
                <img src={require('../images/Icon.png')} alt="" />
                <label htmlFor="">Email</label>
            </button>
            <button className='linkedin'>
                <img src={require('../images/Vector.png')} alt="" />
                <label htmlFor="">LinkedIn</label>
            </button>
        </div>
    </div>
  )
}

export default Info