import React from 'react'
import Styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Main = () => {
  return (
    <>
      <Container id="home">
      <Fade left>
        <Info>
         <h1>MINT YOUR WAY INTO THE ELITE AT THE SOL TRADERS CLUB</h1>
         <p>10,000 unique aesthetic traders that will be utilized in trading competitions, community challenges and educational advancement. We strive to embody the heart of what NFT’s will become a part of you! Come join the club and see if you have what it takes to trade with SOL’s elite.</p>
         <h3>WE ARE <span>#SOLSTREET</span></h3>
         <h2>JOIN THE MOVEMENT</h2>
         <p>Price : 1 SOL</p>
         <button>MINT</button>
        </Info>
        </Fade>
        
        <Img>
        <Fade right>
         <img src="main.png" alt="" />
        </Fade>
        </Img>
      </Container>
    </>
  )
}

const Container = Styled.section`
max-width: 100vw;
background: #101522;
display: flex;
align-items: center;
justify-content: center;
overflow-x: hidden;

@media(max-width: 600px) {
  flex-direction: column-reverse;
  width: 100%;
  overflow-x: hidden;

  img {
    max-width: 100%;
  }
}

}

`

const Info = Styled.div`
max-width: 600px;
color: #fff;
padding: 2rem;

h1{
  font-size: 60px;
  margin: 2rem 0px ;
}
p {
  font-size: 24px;
  margin: 1rem 0px;
}
h2 {
  font-size: 37px;
  margin: 1rem 0px;
}
h3{
  font-size:1.5rem;
  span {
    color: #03e1ff;
  } 
}

button {
  font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: transparent;
    background-image: linear-gradient(
100deg, #25DAB2 12%, #BA42F0 85%);

    border-radius: 5px 5px 5px 5px
;
    padding: 18px 70px 18px 70px;
    border: none;
    cursor: pointer;
}


`;

const Img = Styled.div`

`;




export default Main
