import React from 'react'
import styled from "styled-components";
import male from "../../images/male.png";
import female from "../../images/female.png";


export default function FormThree({values, nextStep, handleChange}) {
    function Continue(e){
        e.preventDefault();
        nextStep()
      }
      
      return (
        <Card>
          <TopSection>
            <h2>Protect your family today...</h2>
          </TopSection>
          <Title>Your Gender</Title>
          <ButtonWrap>
            <Button>
              <input
                type="radio"
                name="gender"
                id="gender"
                autoComplete="off"
                value="Male"
                defaultChecked={values.options === "1"}
                onChange={handleChange}
                onClick={Continue}
                />
              <img src={male} alt="image1" />
              <p>Male</p>
            </Button>
            <Button>
              <input
                type="radio"
                name="gender"
                id="gender"
                autoComplete="off"
                value="Female"
                defaultChecked={values.options === "1"}
                onChange={handleChange}
                onClick={Continue}
              />
              <img src={female} alt="image2" />
              <p> Female</p>
            </Button>
          </ButtonWrap>
          <CardBtnWrap>
            <CardBtn >GET MY QUOTE</CardBtn>
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
    const ButtonWrap = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: row;
      column-gap: 1.8rem;
      margin: 0 4rem;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        row-gap: 2rem;
        align-items: center;
      }
    `;
    const Button = styled.label`
      cursor: pointer;
      white-space: nowrap;
      border: solid thin #37bfed;
      outline: none;
      background: none;
      border-radius: 15px;
      width: 400px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    
      img {
        width: 110px;
        height: 110px;
      }
      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 350px;
        height: 80px;
    
        img {
          width: 50px;
          height: 50px;
          margin: 0 2rem;
        }
      }
      @media screen and (max-width: 400px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 200px;
        height: 80px;
    
        img {
          width: 50px;
          height: 50px;
          margin: 0 2rem;
        }
      }
      &:hover {
        transform: scale(1.04);
        transition: 0.3s ease-in-out;
        background: #def3fa;
      }
      :active{
        transform: scale(1.04);
        transition: 0.3s ease-in-out;
        background: #def3fa;
      }
    `;
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
    

