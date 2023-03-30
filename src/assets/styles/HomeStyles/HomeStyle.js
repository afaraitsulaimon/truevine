import styled from "styled-components";
import bgImage from "../../images/car-jam.jpg"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: purple;

`;
export const NavbarHolder = styled.div`
width: 100%;

`;
export const HomeContentHolder= styled.div`
    width: 100%;
  
`;
export const TopContent= styled.div`
    width: 100%;
    height: 80vh;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-color: orange; */

  .contentHolder{
    width: 100%;
    height: 100%;
    /* display: grid;
    grid-template-columns: minmax(200px, 1fr) 1fr; */
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
`;

// services holder styling starts from here

export const ServicesListHolder= styled.div`
    width: 100%;
  
`;

export const InnerServicesListHolder= styled.div`
    width: 100%;
  
`;