import React from 'react'
import { 
    HeroContainer,
    HeroWrapper,
    Headline,
    CardContainer,
} from './Hero.elements'
import { Age } from '../../Data/Age';
import FormOne from '../Forms/FormOne'
import FormTwo from '../Forms/FormTwo'
import useForm from '../../utils/useForm'
import FormThree from '../Forms/FormThree'
import FormFour from '../Forms/FormFour'
import { Amount } from '../../Data/Amount';
import FormFive from '../Forms/FormFive';
import FormSix from '../Forms/FormSix';

export default function Hero() {
    // const [submitted, setSubmitted] = useState(false)
    const {values, step, nextStep, handleChange} = useForm()
    
    // function submitForm(){
    //     setSubmitted(true);

    // }
    const CurrentForm = () =>{
        switch(step){
            case 1:
                return (
                    <FormOne
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values} 
                    />
                )
            case 2:
                return(
                    <FormTwo
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values} 
                    />
                )
              
            case 3:
                return(
                    <FormThree
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values} 
                    />
                )
                
            case 4:
                return(
                    <FormFour
                        Age={Age}
                        Amount={Amount}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values} 
                    />
                )
            case 5:
                return(
                    <FormFive
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values} 
                    />
                )
            case 6:
                return(
                        <FormSix
                            nextStep={nextStep}
                            handleChange={handleChange}
                            values={values} 
                        />
                )
        }
    }
    return (
        <HeroContainer>
            <HeroWrapper>
                <Headline>
                Complete our <span>quick form below</span> to 
                see if you're eligible for £200,000 
                life cover from just £16.58 per month
                </Headline>
                <CardContainer>
                   <CurrentForm />
                </CardContainer>

            </HeroWrapper>
        </HeroContainer>
    )
}
