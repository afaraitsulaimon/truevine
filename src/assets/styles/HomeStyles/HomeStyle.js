import styled from "styled-components";
import bgImage from "../../images/car-jam.jpg"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    /* background-color: rgb(239,250,255); */
background-color: rgba(236,236,236,0.5);
`;

export const NavbarHolder = styled.div`
width: 100%;
background-color: blue;

`;
export const HomeContentHolder= styled.div`
    width: 100%;
    /* background-color: green; */


    @media (max-width: 576px) {
        width: 100%;
            /* background-color: orange; */

    }
  
`;
export const TopContent= styled.div`
    width: 100%;
    height: 80vh;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
     /* background-color: orange; */

  .contentHolder{
    width: 100%;
    height: 100%;
   
  }

  .contentHolder .content1{
    height: 100%;
    font-family: 'Fira Code', monospace;
  padding-top: 2em;
  padding-left: 5em;

}

.contentHolder .content1 h1{
    margin: 0;
    padding: 0;
    font-size: 4rem;
    font-weight: 700;
line-height:1em;
}

.contentHolder .content1 p{
    width: 500px;
    padding-bottom: 2em;
    padding-top: 1em;
}

.contentHolder .content1 a{
    text-decoration: none;
    color: white;
    background-color: rgb(123, 174, 255);
    padding:1em 3em;
    border-radius: 5px;
}



@media (max-width: 576px) {
    width: 100%;

  
.contentHolder .content1{

padding-top: 0;
padding-left: 0;

}

.contentHolder .content1 p{
    width: 100%;
padding-bottom: 2em;
/* background-color: green; */
text-align: center;
}

.contentHolder .content1 h1{
margin: 0;
padding-top: 2em;
font-size: 2rem;
font-weight: 600;
line-height:0;
text-align: center;
}
.contentHolder .content1 .contactButton{
width: 100%;
height: 10vh;
display: flex;
justify-content: center;

}
}

@media (min-width: 577px) and (max-width: 768px){
    height: 40vh;

}

@media (min-width: 769px) and (max-width: 992px){
    height: 40vh;

    .contentHolder .content1 p{
    font-size: 1.5em;
}

}

@media (min-width: 993px) and (max-width: 1024px) {
    height: 40vh;



    .contentHolder .content1 p{
    font-size: 1.7em;
    font-weight: 400;
    color: black;
    width: 800px;

;
}
}

@media(width:320px){

.contentHolder .content1 h1{

line-height:1em;
}

}

@media(width:240px){

.contentHolder .content1 h1{

line-height:1em;
font-size: 1.2em;
}


.contentHolder .content1 p{

font-size: 0.7em;
}

.contentHolder .content1 a{
    
    padding:0.6em 2em;
    font-size: 0.7em;

}
}

@media(width:280px){

.contentHolder .content1 h1{

line-height:1.3em;
}}
`;

// services holder styling starts from here

export const ServicesListHolder= styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  
@media(width:240px){
    margin-top: 20px;
}
  
`;

export const InnerServicesListHolder= styled.div`
    width: 90%;
    height: 65vh;
  /* background-color: green;  */
    border-radius: 10px;
    /* display: grid;
    grid-template-columns: minmax(min-content, 20%) minmax(80%, 1fr) ;
    grid-gap: 1rem;
    margin: 15px; */
    display: flex;

    /* mobile Responsive styling */

    @media (max-width: 576px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        /* grid-template-columns:  minmax(min-content, 100%); */

    }
    @media (min-width: 577px) and (max-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: column;
   
}

@media (min-width: 769px) and (max-width: 992px){
    width: 100%;
        display: flex;
        flex-direction: column;

}

@media (min-width: 993px) and (max-width: 1024px) {

    width: 100%;
        display: flex;
        flex-direction: column;
}

@media(width:640px){
    margin-top: 250px;
}

`;




export const ButtonsHolder= styled.div`
    width: 20%;
   /* background-color: yellow; */
border-top-left-radius: 10px;  
border-bottom-left-radius: 10px;  
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

a{
    width: 95%;
    padding: 0.7em 1.6em;
    border-radius: 5px;
    border: none;
    background-color: rgb(123, 174, 255);
    color: white;
    font-family: Inter;
    font-weight: 600;
    line-height: 20px;
    text-decoration: none;
    display: flex;
    justify-content: center;
}


/* mobile responsive styling */
@media (max-width: 576px) {
        width: 100%;
        height: 20vh;
        background-color: red;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;

        a{
            text-align: center;
            margin: 0.5em;
            width: 35%;
             padding: 0.5em 1.2em;
            font-weight: 300;
            line-height: 12px;
            overflow-x:auto;
            font-size: 0.6em;
}
    }


    @media (min-width: 577px) and (max-width: 768px){
     
        width: 100%;
        height: 20vh;
        background-color: red;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;

        a{
            text-align: center;
            margin: 0.5em;
            width: 35%;
             padding: 0.4em 1em;
            font-weight: 300;
            line-height: 15px;

}
    }
    
    @media (min-width: 769px) and (max-width: 992px){
  
        width: 100%;
        height: 20vh;
        background-color: red;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;

        a{
            text-align: center;
            margin: 0.5em;
            width: 35%;
             padding: 0.5em 1.2em;
            font-weight: 300;
            line-height: 12px;
            overflow-x:auto;
            font-size: 0.6em;
}
}

@media (min-width: 993px) and (max-width: 1024px) {
    width: 100%;
        height: 20vh;
        background-color: red;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;

        a{
            text-align: center;
            margin: 0.5em;
            width: 35%;
             padding: 0.5em 1.2em;
            font-weight: 300;
            line-height: 12px;
            overflow-x:auto;
            font-size: 0.6em;
}
 
}

@media (width: 240px){
    
        a{
            
            font-size: 0.4em;
}
 
}

`;





export const ServicesContentHolder= styled.div`
   width: 80%;
   /* background-color: blue; */
   border-top-right-radius: 10px;  
border-bottom-right-radius: 10px; 
display: flex;
justify-content: space-around;
align-items: center;
/* background-color: yellow; */



.details1{
    width: 30%;
    background-color:rgb(255,115,92);
    border-radius: 10px;
    padding: 1em;
    height: 60vh;
    
}


.details1 a{
    font-size: 1.3em;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    
}



.details1 p{
    font-size: 1.8em;
    padding-top: 1em;
    padding-right: 0.5em;
    font-family: 'Fira Code', monospace;
    line-height: 1.3em;


    
}

.details2{
    width: 30%;

    /* background-color:green ; */
    border-radius: 10px;
    padding: 1.5em;
    height: 60vh;
}


.details2 p{
    font-size: 1em;
    font-family: 'Fira Code', monospace;

}
.details2 span {

position: relative;
}

.details2 span .sun{
    font-size: 6em;
    color:rgb(255,115,92);
    position: absolute;
    top: 0.2em;
    left: 1.3em;

}




.details3{
    width: 30%;

    background-color:rgba(26,46,53,0.5);
    border-radius: 10px;
    padding: 0.8em;
    height: 60vh;
}



.details3 .topDetails3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


}

.details3 .topDetails3 p{
   width : 140px;
   font-family: 'Inter', Arial, Helvetica, sans-serif;
   font-weight   : 600;

}

.details3 .topDetails3 span .arrow{
   font-size: 2em;
   color: rgb(123, 174, 255);

}
  

.details3 .downDetails3 {
    width: 100%;
    height: 80%;
   display: flex;
  flex-direction: column; 
   align-items: center;
   justify-content: center;
   /* position: relative; */

}

.details3 .downDetails3 span{
    font-family: 'Fira Code', monospace;

}

.details3 .downDetails3 span:nth-child(1){
   font-size: 1em;
   font-weight: 400;
   padding-top: 1em;
}

.details3 .downDetails3 span:nth-child(2){
   font-size: 2.5em;
   font-weight: 700;
}

.details3 .downDetails3 span:nth-child(3){
   font-size: 1.5em;
   color: rgb(123, 174, 255);
   /* position: absolute;
   left: 7.2em;
   top: 2.5em; */

}

.details3 .downDetails3 span:last-child{
   font-size: 1em;
   font-weight: 400;
}

/*  mobile responsive styling */
@media (max-width: 576px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    .details1{
    width: 100%;
    margin-bottom: 30px;
}

.details2{
    width: 100%;
    margin-bottom: 20px;

}

.details3{
    width: 100%;
    margin-bottom: 50px;

}
    }

   
    @media (min-width: 577px) and (max-width: 768px){
        width: 100%;
    display: flex;
    flex-direction: column;

    .details1{
    width: 100%;
    margin-bottom: 30px;
}

.details2{
    width: 100%;
    margin-bottom: 20px;

}

.details3{
    width: 100%;
    margin-bottom: 50px;

}
   
}

@media (min-width: 769px) and (max-width: 992px){
    width: 100%;
    display: flex;
    flex-direction: column;

    .details1{
    width: 100%;
    margin-bottom: 30px;
    font-size: 2em;
}

.details2{
    width: 100%;
    margin-bottom: 20px;
    font-size: 2em;


}

.details3{
    width: 100%;
    margin-bottom: 50px;
    font-size: 1.7em;

}

.details2 span .sun{
  
    position: absolute;
    top: 0.8em;
    left: 2em;

}

}

@media (min-width: 993px) and (max-width: 1024px) {

    width: 100%;
    display: flex;
    flex-direction: column;

    .details1{
    width: 100%;
    margin-bottom: 30px;
    font-size: 2em;
}

.details2{
    width: 100%;
    margin-bottom: 20px;

}

.details3{
    width: 100%;
    margin-bottom: 50px;
    font-size: 2em;

}

.details2{
    font-size: 2em;

}
.details2 span .sun{
  
  position: absolute;
  top: 0.8em;
  left: 3em;

}

}



@media(width:640px){
    .details2 span .sun{
  
  position: absolute;
  top: 0;
  left: 4.5em;

}

.details3 .downDetails3 span:nth-child(1){
   font-size: 0.5em;
   padding-top: 1em;
}

.details3 .downDetails3 span:nth-child(2){
   font-size: 1.5em;
}

.details3 .downDetails3 span:nth-child(3){
   font-size: 1em;
}

.details3 .downDetails3 span:last-child{
   font-size: 1em;
   font-weight: 400;
}
}


@media (width: 240px) {
   
    .details1 a{
    font-size: 1em;
}

.details1 p{
    font-size: 0.7em;
    line-height: 1em;
}


.details2 p{
    font-size: 0.7em;

}

.details2 span .sun{
    font-size: 3em;
    position: absolute;
    top: 0.2em;
    left: 3em;

}


.details3 .topDetails3 p{
    font-size: 0.7em;


}

.details3 .topDetails3 span .arrow{
   font-size: 1.5em;

}
  


.details3 .downDetails3 span:nth-child(1){
   font-size: 0.7em;
   padding-top: 0.5em;
}

.details3 .downDetails3 span:nth-child(2){
   font-size: 1.5em;
   font-weight: 700;
}

.details3 .downDetails3 span:nth-child(3){
   font-size: 1em;
   /* position: absolute;
   left: 7.2em;
   top: 2.5em; */

}

.details3 .downDetails3 span:last-child{
   font-size: 0.7em;
}
    }

    

`;

export const FaqHolder = styled.div`
width: 100%;
display: flex;
justify-content: center;
/* background-color: purple; */
`; 

export const InnerFaqHolder = styled.div`
width: 90%;
min-height: 65vh;
/* background-color: brown; */
margin-top: 3em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

.head{
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
}

.head h1{
    text-align: center;
    font-family: Inter;
    font-weight: 700;

}

.dataHolder{
    width: 80%;
    min-height: 10vh;
    /* background-color: green; */
    border-radius: 10px;
    margin: 10px;
    padding: 1em;
    background-color: rgb(123,174,255);
 box-shadow: 10px 10px 20px grey;
}

.dataHolder p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Inter;
}

.dataHolder p .arrowDown{
    font-size: 1em;
    font-family: 'Fira Code', monospace;
    cursor: pointer;

}

.dataHolder p .cancel{
    font-size: 1em;
    font-family: 'Fira Code', monospace;
    cursor: pointer;

}

.dataHolder .showAnswers{
    font-family: 'Fira Code', monospace;
    display: inline;

}

.dataHolder .hideAnswers{
    font-family: 'Fira Code', monospace;
    display: none;

}


/* mobile responsive styling */


@media (max-width: 576px) {
    margin-top: 73em;
    }



    @media (min-width: 577px) and (max-width: 768px){
     
          margin-top: 90em;

    }


     @media (width: 712px){
     
          margin-top: 95em;

    }

    
    @media (min-width: 769px) and (max-width: 992px){
  
               margin-top: 110em;

}



@media (min-width: 993px) and (max-width: 1024px) {
    margin-top: 55em;

}


  @media (width: 240px){
     
          margin-top: 35em;

    }

    @media (width: 280px){
     
     margin-top: 60em;

}

  @media (width: 320px){
     
          margin-top: 55em;

    }



    @media (width: 390px){
     
     margin-top: 75em;

}

@media (width: 412px){
     
     margin-top: 80em;

}


    @media (width: 414px){
     
     margin-top: 80em;

}

    

     @media (width: 480px){
     
          margin-top: 75em;

    }

    @media (width: 540px){
     
     margin-top: 65em;

}

   @media (width: 640px){
     
          margin-top: 40em;

    }

    @media (width: 1024px){
     
     margin-top: 110em;

}  
`; 

export const TestimonyHolder = styled.div`
width: 100%;
display: flex;
justify-content: center;

`; 

export const InnerTestimonies = styled.div`
width: 90%;
/* background-color: red; */
height: 25em;
.head{
    width: 100%;
    margin-top: 50px;
}

.head h1{
    text-align: center;
    font-family: Inter;
    font-weight: 700;

}

@media (max-width: 576px) {
    width: 100%;
    height: 100%;

}

`; 
export const FooterHolder = styled.div`
width: 100%;
height: 20vh;
display: flex;
justify-content: center;
margin-top: 10em;


@media (width: 240px){
    margin-top: 0;


}

@media (width: 320px){
    margin-top: 0;


}
@media (width: 360px){
    margin-top: 0;


}

`; 

export const InnerFooterHolder = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;

.footerLine{
    width: 100%;
    height: 2px;
    background-color: #7baeff;


}

.footerContentHolder{
    width: 100%;
    height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

}

ul{
    width: 150px;
    display: flex;
    display: flex;
    justify-content: space-between;
}

ul li{
    list-style: none;
}

@media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .footerContentHolder{
    
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

}

}



@media (min-width: 577px) and (max-width: 768px){
     

    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }
}


@media (width: 712px){

    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }

}


@media (min-width: 769px) and (max-width: 992px){


    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }
}



@media (min-width: 993px) and (max-width: 1024px) {

    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }
}


@media (width: 240px){
    
    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }

    .footerLine{
    width: 100%;
    height: 2px;
    background-color: #7baeff;


}

.footerContentHolder .copyrightHolder span{
  font-size: 0.6em;

}

}

@media (width: 280px){


    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }
}

@media (width: 320px){


    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    }

}

@media (width: 360px){


.footerContentHolder{

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

}

.footerContentHolder .copyrightHolder {

padding-bottom: 1em;

}

}

@media (width: 390px){


    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }
}

@media (width: 412px){


    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }
}


@media (width: 414px){

    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }

}



@media (width: 480px){

    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }

}

@media (width: 540px){

    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }

}

@media (width: 640px){


    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }
}

@media (width: 1024px){


    .footerContentHolder{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    }
}  
`; 



