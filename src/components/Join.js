import React from 'react'
import Styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';

const Join = () => {
  return (
    <>
      <Container id="mint">
        <div className="main"></div>
        <img src="sol-traders.png" alt="" />
        <h1>JOIN THE MOVEMENT</h1>
        <h3>Price : 1 SOL</h3>
       <TextInput type="text" placeholder="5000/5000"/>
        <button>MINT</button>
        <Zoom left>
        <Card>
          <Text>
          
          <h1>JOIN THE COMMUNITY</h1>
          <p>Have any questions about the project? Join the discord for more information</p>
          <button className="cardbtn"><a href="https://discord.com/invite/zbrq8KUmaV" target="_blank">JOIN THE SOLSTREET FAMILY ON DISCORD</a> </button>
          </Text>
          <Img>
          <img src="cardimg.png" alt="" />
          </Img>
        </Card>
        </Zoom>
      </Container>
    </>
  )
}

const Container = Styled.section`
background: black;
color: #fff;
max-width: 100vw;
padding-top: 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
  font-size: 37px;
  margin: 1rem;
  font-weight: bold;
}

h3 {
  font-size: 24px;
}



button{
  font-size: 18px ;
    font-weight: 700 ;
    text-transform: uppercase ;
    background-color: transparent ;
    background-image: linear-gradient( 
    100deg, #25DAB2 12%, #BA42F0 85%) ;
    border-radius: 5px 5px 5px 5px;
   padding: 18px 70px 18px 70px;
   outline: none;
   border: none;
   color: #fff;
   cursor: pointer;

   a {
     text-decoration: none;
     color: #fff;
   }
}

@media(max-width: 600px) {
  flex-direction: column;
  text-align: center;
}

`

const TextInput = Styled.textarea`
font-size: 16px;
    min-height: 37px;
    padding: 6px 16px;
    border-radius: 4px;
    width: 420px;
    border: none;
    margin: 2rem;
    outline: none;

    @media(max-width: 600px) {
      width: 90%;
    }
`

const Card = Styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 6rem 0;
background-image: linear-gradient( 
100deg, #25DAB2 12%, #BA42F0 85%);
border-radius: 20px;
padding: 1rem;

h1 {
  font-size: 45px;
}

p {
  font-size: 20px;
  font-weight: 600;
  max-width: 80%;
}

@media(max-width: 600px) {
  flex-direction: column;

  height: 100%;
  width: 100%;
  text-align: center;

  p {
    margin-left: 40px;
  }

  img {
    width: 100%;
    margin-bottom: -4.5%;
  }
}
`

const Text = Styled.div`



button {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    background: #DC1FFF !important;
    padding: 18px 35px 18px 35px;
    margin-top: 1.8rem;
    margin-left: 1rem;

    @media(max-width: 600px) {
      padding: 10px;
      font-size: 15px;
      margin-bottom: 30px;
    }
    
}
`;

const Img = Styled.div`
  img {
    height: 100%;
    
  }
`

export default Join
