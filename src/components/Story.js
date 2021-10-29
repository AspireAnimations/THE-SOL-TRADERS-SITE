import React from 'react'
import Styled from 'styled-components'

const Story = () => {
  return (
    <>
      <Container id="story">
          <h1>OUR STORY</h1>
          <p>Our project stemmed from our troubles as analysts at a hedge fund, trying to make it to the big leagues. We had no way of accurately tracking our performance and having it verified. Without such verification, it would be hard for us to advance our careers. This thought, coupled with our love for art, led us to create The SOL Traders Club. The SOL Traders Club is a trading experienced offered on the Solana blockchain. Minting one of the SOL Trader NFT’s allows the user to access their own “Trading Floor,” allowing him/her to do multiple things:
          </p>
          <Points>
            <h4><img src="list_icon.png" alt="" /> Track their performance with live stock/crypto pricing.</h4><br></br>
            <h4><img src="list_icon.png" alt="" /> Compete against other community members.</h4>
            <h4><img src="list_icon.png" alt="" /> Learn from others in the community.</h4>
          </Points>
      </Container>
    </>
  )
}

const Container = Styled.section`
max-width: 100vw;
background-color: black;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
h1 {
  font-size: 48px;
  padding: 4rem 0 2rem 0 ;
}
P {
  font-size: 20px;
  line-height: 2rem;
  max-width: 1100px;
}

@media(max-width: 600px) {
  padding: 1rem;
}
`

const Points = Styled.div`
display: flex;
flex-direction: row;
margin: 2rem 5rem;;
align-items: center;
justify-content: space-around;
max-width: 1100px;
h4 {
  padding: 1rem;
  font-size: 20px;

}

img {
  margin-right: 10px;
}

@media(max-width: 600px) {
  flex-direction: column;
  width: 100%;
  text-align: start;
}

`

export default Story
