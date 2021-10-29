import React from 'react'
import Styled from 'styled-components'
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';

const Cards = () => {
  return (
    <>
      <Container>
      <LightSpeed left>
        <Card>
          <img src="icon1.png" alt="" />
          <h1>TRADE</h1>
          <p>Each holder of a SOL Trader gets access to their own customizable ‘Trading Floor’. This platform will have live pricing for all global stock 
            markets and cryptocurrencies.</p>
        </Card>
        </LightSpeed>
        <Flip left>
        <Card>
          <img src="icon2.png" alt="" />
          <h1>COMPETE</h1>
          <p>Think you have what it takes to be elite? Challenge other Club Traders to in-game competitions on our trading floor to receive recognition and rewards.</p>
        </Card>
        </Flip>
        <LightSpeed right>
        <Card>
          <img src="icon3.png" alt="" />
          <h1>LEARN</h1>
          <p>Chat with club members directly on the ‘Trading Floor’. Join community members and create your own trading groups to discuss market conditions, competitions, and trading strategies.</p>
        </Card>
        </LightSpeed>
      </Container>
    </>
  )
}



const Container = Styled.section`
max-width: 100%;
height: 452px;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
padding: 60px;
border-radius: 20px;
color: #000;
background: #fff;

@media(max-width: 600px) {
  flex-direction: column;
  height: 100%;
}

`

const Card = Styled.div`
max-width: 356px;
height: 312px;
h1 {
  font-size: 28px;
  padding: 15px;
  font-weight: bold;
}
p {
  font-size: 18px;
  line-height: 1.5rem;
  padding: 20px;
}

@media(max-width: 600px) {
  margin-top: 40px;
}

`

export default Cards
