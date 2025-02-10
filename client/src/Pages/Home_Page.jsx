import React from 'react'
import '../Cascading_Style_Sheet/Home_Content.css'
import logobig from '../Media_Files/logo_bg.png'


const Home_Page = () => {
  return (
    // <div className='h-[90vh] flex justify-center align-center flex-col'>
    //   <div className='' data-home-content>
    //     <div className='flex justify-center' data-background-logo>
    //       <img src={logobig} alt="" srcset="" />
    //     </div>
    //     <div className=' w-[7vw] flex items-center justify-center' data-background-name>
    //       <h1 className='text-6xl font-bold transform rotate-[-90deg] whitespace-nowrap'>HOME</h1>
    //     </div>
    //     <div className='flex justify-center flex-row' data-home-greetings>
    //       <div className='flex items-center justify-center flex-col'>
    //         <h1 className='text-2xl font-bold w-[40vw] mb-[7vh]'>Who Are We</h1>
    //         <p className='align-center w-[40vw]'>
    //           Fixi Security is a leading cybersecurity agency dedicated to safeguarding
    //           businesses in today’s complex digital landscape. We provide comprehensive
    //           security solutions, from penetration testing and vulnerability assessments
    //           to incident response and security awareness training. Our team of certified
    //           experts uses cutting-edge techniques and a proactive approach to identify
    //           and mitigate risks before they impact your bottom line. At Fixi Security,
    //           we’re not just fixing problems; we’re building resilient security
    //           postures that empower businesses to thrive in a secure environment.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div>
        <div data-content-header-text className='flex text-[12vw]  justify-center align-center'>
          <div>
            <h1 className=''>SECU</h1>
          </div>
          <div>
            <h1 data-content-name-outlined-text>RITY</h1>
          </div>
        </div>
        <div>
          <div>
            <h1 className='text-5xl'><b>We Think Like</b></h1>
            <h1>Hackers , So You</h1>
            <h1>Don't Have To</h1>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Home_Page