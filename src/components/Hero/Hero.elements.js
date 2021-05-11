import styled from "styled-components";
import Back from '../../images/back.jpg'

export const HeroContainer = styled.div`
height:140vh;
background: linear-gradient(
    180deg, 
    rgba(0, 0, 0, 0.5)0%, 
    rgba(0, 0, 0, 0.5)35%,
    rgba(0, 0, 0, 0.1)100%), url(${Back}) no-repeat center;
background-size:cover;
`
export const HeroWrapper = styled.div`
display:flex;
margin:0 24px;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const Headline = styled.h1`
text-align:center;
line-height:1.5;
font-size:clamp(2rem, 5vw, 3rem);
margin:1rem 31rem;
color:#fff;
span{
    color:#37bfed;
}
@media screen and (max-width:768px){
    margin: 1rem 4rem;
}
`
export const CardContainer = styled.div`
margin:8rem 0;
background:#fff;
width:35rem;
border-radius:10px;
@media screen and (max-width:768px){
    width:30rem;
}
`
