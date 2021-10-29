import React from 'react'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const VisualStory = () => {
  return (
    <>
      <Container>
      <Fade left>
       <Img>
        <img src="section2.png" alt="" />
       </Img>
       </Fade>
       <Fade right>
       <Text>
         <p>Access your own customizable UI experience called ‘The Trading Floor.’ This will track live pricing for both Cryptocurrencies and Global stock markets. You will have access to every stock ticker across the various markets.
Record and verify your PNL directly in your platform. This allows users to confirm their gains/losses with 100% accuracy. This data can be released to you with a simple click of a button and used however you wish. It is YOUR DATA, and YOU have full ownership.</p>
        <p>Chat with other members - talk about global markets, cryptocurrencies, trading ideas. Create a chatroom or build your own following. The opportunities are endless.</p>
        <p>COMPETE - earn rewards by competing against other community members. Progress will be tracked, and top performers will gain notoriety and be featured as the top trader on the Platform.</p>
        <p>++ Much more to be announced</p>
        <p>We are excited about this project and would love to have you join the movement. Let’s all help each other become better traders and investors. Click the mint button, and join the SOL Traders Club today.</p>
       </Text>
       </Fade>
      </Container>
    </>
  )
}

const Container = Styled.section`
max-width: 100vw;
background: black;
color: #fff;
display: flex;
align-items: center;
justify-content: center;

@media(max-width: 600px) {
  flex-direction: column;
  width: 100%;
}

`

const Img = Styled.div`
img {
  @media(max-width: 600px) {
  max-width: 350px;
}
}
`
const Text = Styled.div`
max-width: 436px;
font-size: 20px;
display: flex;
flex-direction: column;


p{
  padding: 10px;
  font-size:20px;
  line-height: 1.8rem;
  font-weight: 550;
  margin-left: 1rem;
}
`

export default VisualStory
