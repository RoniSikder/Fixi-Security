import React from 'react'
import '../Cascading_Style_Sheet/Home_Content.css'
import logobig from '../Media_Files/logo_bg.png'
import home_prop from '../Media_Files/Home_props.png'

const Home_Page = () => {
  return (
    <>
      <div>
        <div data-content-header-text className='flex text-[12vw] my-[7vh] justify-center align-center'>
          <div>
            <h1 className=''>SECU</h1>
          </div>
          <div>
            <h1 data-content-name-outlined-text>RITY</h1>
          </div>
        </div>
        <div className='flex justify-evenly my-[4vh]'>
          <div data-home-tag-line>
            <h1 data-home-tag-line-bold>We think like</h1>
            <h1><span data-home-tag-line-thick>Hackers</span><span data-home-tag-line-thin>, so you</span></h1>
            <h1 data-home-tag-line-thin>Don't have to</h1>
          </div>
          <div>
            <img src={home_prop} alt="" srcset="" className='h-[150px] w-[150px]'/>
          </div>
          <div>
            <div>
              <div><h1>100</h1></div>
              <div>+</div>
            </div>
            <div>We help the brands stands out through Security</div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_Page