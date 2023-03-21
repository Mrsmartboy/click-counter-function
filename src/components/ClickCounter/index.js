import { useState } from "react"

import { Container,Heading,SpanElement,Description,ButtonElement } from "./styled"

const ClickCounter =()=>{
    const [count,setCount]=useState(0)

const onClickButton=()=>{
    setCount(prevState=>prevState+1)
}

    return(
        <Container>
            <Heading>
                The Button has been clicked 
                <SpanElement> {count} </SpanElement>
                 times
                <Description>click the button to increase the count</Description>
                <ButtonElement onClick={onClickButton}>Click Me!</ButtonElement>
            </Heading>
        </Container>
    )


}

export default ClickCounter