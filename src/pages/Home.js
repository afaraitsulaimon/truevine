import React, { useState } from 'react'
import NavBar from '../components/NavBar'

import {Container,
  NavbarHolder,
   HomeContentHolder,
   TopContent,
   ServicesListHolder,
   InnerServicesListHolder,
   ButtonsHolder,
   ServicesContentHolder,
  FaqHolder,
  InnerFaqHolder,
TestimonyHolder,
FooterHolder,InnerTestimonies,InnerFooterHolder
  } from '../assets/styles/HomeStyles/HomeStyle'

import { Link } from 'react-router-dom'
import { ImArrowDown,  ImArrowUpRight2,ImCancelCircle,ImPlus } from 'react-icons/im'
import { BsSunFill } from 'react-icons/bs'
import {ServiceListDatas} from '../utils/ServiceListData'
import {FaqDatas} from '../utils/FaqListData'
import { motion } from "framer-motion";

import Testimonies from '../components/Testimonies'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import 'animate.css';





const Home = () => {

// store the first data inside the state, so that we won't get error
  const [serviceData, setServiceData] = useState(ServiceListDatas[0]);
  
  // for faq
  const [faqDisplay, setFaqDisplay] = useState(false);

  //on click of the button
  // we pass in a parameter from the button clicked
  // which we use to find the key value that is equal to the 
  //parameter passed in
  // then we store the data inside the state and then display it

const handleButton = (buttonName) => {
  const data = ServiceListDatas?.find(item => item.id === buttonName);
  setServiceData(data)

  console.log(serviceData);
}


// we set the state faqDisplay to the index of the clicked one
//we checked if the faqDisplay is equal to the index of the cliekd one
// Then return and setFaqDisplay, which is the state to null
//then set it to the index, if it is not equal to it
// the we use it to check it at the clicked place


const handleFaqDisplay = (index) => {
  
  if (faqDisplay === index) {
    return setFaqDisplay(null)
  }
  setFaqDisplay(index)
  console.log(faqDisplay)
}

const yearDate = new Date();
  return (
    <Container>
            <NavbarHolder>
            <NavBar/>
            </NavbarHolder>

            <HomeContentHolder>
                <TopContent>
                  <div className='contentHolder'>

                  <div className='content1'>
                        <h1>
                          Insurance Issues?
                        </h1>
                        <p>
                          We have got you covered, 
                          with great insurance companies 
                          that we are connected to, any of your 
                          insurance process is easy and smooth, 
                          we are just a number away from you finger.
                          Just Dial 080TrueVine
                        </p>
                        <div className='contactButton'>
                        <Link to='#'>Contact Us</Link>
                        </div>

                    </div>

                 
                    </div>

                    
                </TopContent>

                <ServicesListHolder>
                <InnerServicesListHolder>
                <ButtonsHolder>
                        <Link onClick={() => handleButton('auto-insurance')}>Auto Insurance</Link>
                        <Link onClick={() => handleButton('personal-insurance')}>Personal Insurance</Link>
                        <Link onClick={() => handleButton('business-insurance')}>Business Insurance </Link>
                        <Link onClick={() => handleButton('life-insurance')}>Life Insurance </Link>
                        <Link onClick={() => handleButton('travel-insurance')}>Travel Insurance </Link> 

                    </ButtonsHolder>
              
                
                    
                    <ServicesContentHolder>
                      <div className='details1'>
                        <Link to='/'>Learn More</Link>
                        <p>
                        {serviceData.content1}
                        </p>
                      </div>
                      <div className='details2'>
                        <p>
                        {serviceData.content2}
                          </p>
                          <span><BsSunFill className='sun'/></span>

                      </div>


                      <div className='details3'>
                        <div className='topDetails3'>
                        <p>Great Service Happy Customers</p>
                        <span><ImArrowUpRight2 className='arrow'/></span>
                        </div>

                        <div className='downDetails3'>
                          <span>Over</span> 
                           <span>{serviceData.numbers}</span>
                           <span><ImPlus/></span>
                           <span>customers</span>
                        </div>
                     
                      </div> 

                    </ServicesContentHolder>


                         </InnerServicesListHolder>

</ServicesListHolder>

<FaqHolder>
  <InnerFaqHolder>
  <div className='head'><h1>Faqs</h1></div>

    {FaqDatas?.map((datum, index) =>
      <div key={datum.id} className='dataHolder'>
        <p><span>{datum.question} </span>  {faqDisplay === index ? <ImCancelCircle className='cancel'  onClick={() => handleFaqDisplay(index)} /> : <ImArrowDown className='arrowDown' onClick={() => handleFaqDisplay(index)}/> }</p>
        <span className={faqDisplay === index ? 'showAnswers' : 'hideAnswers'}>{datum.answer}</span>
      </div>
    )}

  </InnerFaqHolder>
  
</FaqHolder>

<TestimonyHolder>
  <InnerTestimonies>
    <div className='head'><h1>Testimonies</h1></div>

<motion.div
    animate={{ opacity:1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition ={{ duration: 0.5 }}
    >
        
        <Testimonies/>
    </motion.div>
    </InnerTestimonies>
</TestimonyHolder>

<FooterHolder>
  <InnerFooterHolder className=''>

    <div className='footerLine animate__animated animate__bounceInDown'></div>

    <div className='footerContentHolder animate__animated animate__bounceInUp'>
  <div className='copyrightHolder'>
      <span>© Copyright Truevine {yearDate.getFullYear()}, All Rights Reserved</span>
  </div>
  
        <ul>
            <li><FaTwitter/></li>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>

        </ul>
        </div>
  </InnerFooterHolder>
  
</FooterHolder>
           
            </HomeContentHolder>

    </Container>
  )
}

export default Home