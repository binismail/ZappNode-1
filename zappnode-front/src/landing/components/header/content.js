import React from 'react';
import report from './imgs/content right.svg';
import Button from '../button/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContentR = ()=> {
    // content page right for the image host
    AOS.init()
        
    AOS.init({
        duration: 2000,
        delay: 0
    })

    return (
        <div data-aos="fade-up" className="w-1/2 d-none mb-10 lg: mx-0 md: mx-auto sm: mx-auto mt-5">
        <img src={report} alt="report" className="w-full"/>
        </div>
    )
}

const ContentL = ()=> {
      // content page right for the text
    return (
        <div data-aos="fade-right" className="animate__backInDown container sm:w-auto center-text wi-full mt-16 px-5 lg:mr-10 md:mr-0 lg:text-left md:text-center lg:ml-10 md:ml-0 sm:pb-10 lg:pb-0 md:pb-10">
        <h1 className="text-5xl font-extrabold ml-0">SAY NO TO <span className="text-ut">DOWNTIME.</span></h1>
        <p className="text-base font-semibold mt-5 w-2/3 lg:mx-0 md: mx-auto sm:text-center lg:text-left md:text-center">Dependable uptime monitoring for the web. Rapid notifications by email, Whatsapp, Twitter, [...] and the most competitive pricing you will find.</p>
        <div className="text-center flex items-center mt-12 lg:justify-start md:justify-center sm: justify-center">
          <Button content="Demo" styles="trans tracking-wider bg-transparent hover:bg-white hover:border-white hover:text-green-500 border text-white py-3 px-5 w-32 rounded font-semibold mr-10" link="#demo"/>
          <Button content="Register" styles="trans tracking-wider btn-primary text-primary px-8 py-3 rounded font-semibold border border-green-500 w-32 hover:bg-transparent hover:text-white" link="/register"/>
        </div>
        </div>
    )
}

const Content = ()=> {
    // merging both component from above
    return(
        <div className="container my-auto pb-16 flex text-primary pt-10 justify-center lg:mt-24 md:mt-24 lg:flex-row md: flex-col sm: flex-row sm:mx-auto">
        <ContentL/>
        <ContentR/>
        </div>
    )
}

export default Content;
