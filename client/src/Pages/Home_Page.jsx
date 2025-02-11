import React from 'react'
import '../Cascading_Style_Sheet/Home_Content.css'
import { Hash } from 'lucide-react';
import home_prop from '../Media_Files/Home_props.png'
import home_prop2 from '../Media_Files/Home_props2.png'

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
          <div data-best-card className='w-[40vw]'> 
            <div className='flex mx-[10vh] align-center'>
              <div><h1 data-card-provider className=''>100</h1></div>
              <div data-card-provider-small >+</div>
            </div>
            <div data-best-card-service>We help the brands stands out through Security</div>
            <div data-best-card-tag className='m-[10vh] p-[20px]'>
              <img className='h-[150px] w-[150px]' src={home_prop2} alt="" srcset="" />
              <h1 data-tag-title>#Best Choice</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_Page