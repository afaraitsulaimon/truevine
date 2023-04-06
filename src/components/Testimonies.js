import React from 'react'
import {TestimonyListDatas} from '../utils/TestimoniesListData'
import { Card } from '../assets/styles/TestimonyStyles'
import {FaQuoteRight,FaQuoteLeft} from 'react-icons/fa'
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';




const Testimonies = () => {
  return (

    <Splide options={{
        perPage:3,
        arrows:true,
        pagination:false,
        drag:"free",
        gap: "2rem",
        type:'loop',
        autoScroll: {
          speed: 1,
          pauseOnHover: true,

        },
       mediaQuery:'max-width',
       breakpoints:{
        576:{
          gap: "4rem",
          perPage:2,
        }
      }
   }}
   extensions={{ AutoScroll }}

   >
        {TestimonyListDatas?.map((data) => 
           <SplideSlide key={data.id}>
            <Card>
                <p><FaQuoteLeft className='leftQuote'/>{data.content}<FaQuoteRight  className='rightQuote'/></p>
                <span>{data.name}</span>

            </Card>
            </SplideSlide>
        )}
    </Splide>
  )
}

export default Testimonies