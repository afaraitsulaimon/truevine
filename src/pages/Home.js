import React from 'react'
import NavBar from '../components/NavBar'

import {Container,
    NavbarHolder,
     HomeContentHolder,
     TopContent,
     ServicesListHolder,
     InnerServicesListHolder} from '../assets/styles/HomeStyles/HomeStyle'
import { Link } from 'react-router-dom'

const Home = () => {
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

                  </InnerServicesListHolder>

                </ServicesListHolder>

               
            </HomeContentHolder>

    </Container>
  )
}

export default Home