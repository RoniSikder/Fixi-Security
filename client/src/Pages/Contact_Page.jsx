import React from 'react'
import { Phone,AtSign,BriefcaseBusiness } from 'lucide-react';

const Contact_Page = () => {
  return (
    <div>
      <div data-content-header-text className='flex text-[15vw]  justify-center align-center'>
        <div>
          <h1 className=''>CON</h1>
        </div>
        <div>
          <h1 data-content-name-outlined-text>TACT</h1>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h1>Let's Connect</h1>
            <p>With Us</p>
            <p>Reach out for inquiries, collaborations, or just to say hello. We're eager to connect!</p>
          </div>
          <div>
            <img src="" alt="" srcset="" />
          </div>
          <div>
            <div className='flex'>
              <div>
                <Phone />
              </div>
              <div>
                <h2>Phone</h2>
                <p>1234567890</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <AtSign/>
              </div>
              <div>
                <h2>Email</h2>
                <p>Lorem@maill.com</p>
              </div>
            </div>
            <div className='flex'>
              <div>
                <BriefcaseBusiness/>
              </div>
              <div>
                <h2>Administrative Hours</h2>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Contact_Page