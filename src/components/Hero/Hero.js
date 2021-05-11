import React, { useState } from 'react'
import { 
    HeroContainer,
    HeroWrapper,
    Headline,
    CardContainer,
} from './Hero.elements'

import FormOne from '../Forms/FormOne'
import FormTwo from '../Forms/FormTwo'


export default function Hero() {
    const [submitted, setSubmitted] = useState(false)
    
    function submitForm(){
        setSubmitted(true)
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
                    {!submitted?
                        <FormOne submitForm={submitForm}/>
                            :
                        <FormTwo/>
                    }
                   
                   
                </CardContainer>

            </HeroWrapper>
        </HeroContainer>
    )
}
