import React from 'react'
import styled from "styled-components";
import male from "../../images/male.png";
import female from "../../images/female.png";



export default function FormFive({nextStep, values, handleChange}) {
  
    function Continue(e){
        e.preventDefault();
        nextStep()
      }
      
      return (
        <Card>
          <TopSection>
            <h2>Protect your family today...</h2>
          </TopSection>
          {/* <Title>Your Gender</Title> */}
          <TextWrap>
            <NameWrap>
                <NameField 
                name="first_name" 
                type="text" 
                placeholder="Enter Your First Name" 
               
                onChange={handleChange}/>
                   
                
            </NameWrap>
            <NameWrap>
                <NameField 
                name="last_name" 
                type="text" 
                placeholder="Enter Your Last Name" 
              
                onChange={handleChange}/>
             
            </NameWrap>
          </TextWrap>
          <CardBtnWrap>
            <CardBtn onClick={Continue}>GET MY QUOTE</CardBtn>
            {/* <button className="btn btn-outline-primary btn-lg">  Next  </button> */}
          </CardBtnWrap>
        </Card>
      );
    };

    
    const Card = styled.form`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      [type="radio"] {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `;
    const TopSection = styled.div`
      background: #193559;
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: 100px;
      h2 {
        padding: 2.6rem 0;
        text-align: center;
        font-size: 2rem;
        color: #fff;
      }
    `;
    const Title = styled.div`
      text-align: center;
      margin: 1.5rem 0;
      font-size: 18px;
      font-weight: 700;
    `;
    const TextWrap = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      row-gap: 1.8rem;
      margin: 0 4rem;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        row-gap: 2rem;
        align-items: center;
      }
    `;
    const NameWrap = styled.div`
        width:100%;
        margin:2rem 0;
    ` 
    const NameField = styled.input`
        width:100%;
        background:#CEE7FD;
        border:none;
        padding:0.8rem 1rem;
        /* appearance: none; */
        border-radius:10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    ` 
    const CardBtnWrap = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3rem 0 2rem 0;
      z-index: 10;
    `;
    const CardBtn = styled.button`
      background: linear-gradient(#84ca1e, #66ac00 50%);
      padding: 1.7rem 8rem;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 6px;
      color: #fff;
      font-weight: 700;
      font-size: 1.4rem;
      &:hover {
        transform: scale(1.04);
        transition: 0.2s ease-out all;
      }
    `;
    

