import styled from "styled-components";
export const Nav = styled.nav`
    width: 100%;
    height: 20vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
background-color: #ffffff;
    @media (max-width: 912px) and (min-width: 360px) {

position: relative;

}
`;

export const LogoHolder = styled.div`
    margin-left: 20px;

    img{
        width: 50px;
        height: 50px;
    }
`;


// for desktop styling

export const MenuHolder = styled.div`
height: 100%;
width: 35%;
margin-right: 20px;
display: flex;
    align-items: center;

.menuList{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.menuList li{
  list-style: none;
}

button{
    padding: 0.5em 1.2em 0.5em 1.2em;
    border-radius: 5px;
    background-color: #effaff;
    border: 2px solid #7baeff;
    color: #7baeff;
 cursor: pointer;
    

}

button:hover{

    /* background-color: #effaff; */
    background-color: #7baeff;
    color:  #effaff;
    

}

@media (width: 240px) {
    .menuListShow{
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: green;
width: 100vw;
height: 90vh;

position: absolute;
right: 3px;
top: 100px;


}

.menuListShowHide{
display: none;

}  

}

@media (width: 280px) {
    .menuListShow{
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: green;
width: 100vw;
height: 90vh;

position: absolute;
right: 3px;
top: 100px;


}

.menuListShowHide{
display: none;

}  

}

@media (width: 320px) {
    .menuListShow{
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: green;
width: 100vw;
height: 90vh;

position: absolute;
right: 3px;
top: 100px;


}

.menuListShowHide{
display: none;

}  

}


@media (max-width: 912px) and (min-width: 360px) {


.menuListShow{
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: green;
width: 100vw;
height: 90vh;

position: absolute;
right: 3px;
top: 100px;


}

.menuListShowHide{
display: none;

}

}

@media (max-width: 1024px) {


.menuListShow{
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: green;
width: 100vw;
height: 90vh;

position: absolute;
right: 3px;
top: 100px;


}

.menuListShowHide{
display: none;

}

}

`;




export const ForIcons = styled.div`
    display: none;

    @media (width: 240px) {
        display: inline;
    margin-right: 20px;

}

@media (width: 280px) {
        display: inline;
    margin-right: 20px;

}

    @media (width: 320px) {
        display: inline;
    margin-right: 20px;

}


    @media (max-width: 912px) and (min-width: 360px) {

    display: inline;
    margin-right: 20px;
}

@media (max-width: 1024px) {

display: inline;
margin-right: 20px;
}
`;