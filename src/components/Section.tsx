import React from 'react';
import styled from 'styled-components'

interface Data {
    title: string
    description: string
    backgroundImg: string
    leftBtnText: string
    rightBtnText: string
}

const Section = (props: Data): any => {
    return (
        <Wrap bgImage={props.backgroundImg} >
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {props.rightBtnText &&
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    );
}

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: ${(props): string => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction:column;
    justify-content: space-between; 
    align-items: center;
`
const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px ;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background: rgba(23,26,32,0.8);
    height: 40px;
    width:256px;
    border-radius: 100px;
    color: white;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.65;
`
const DownArrow = styled.img`
    margin-top:20px;    
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div` 
    
`

export default Section;