import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import BugattiImg from "../../static/bugatti.jpeg"
import FerrariImg from "../../static/ferrari.jpeg"
import LamborghiniImg from '../../static/lamborghini.jpg'

const Head = styled.div`
  text-align: center;
  margin-top: 30px;
`
const CardCar = styled.img`
  width: 400px;
  height: auto;
  src: ${BugattiImg}
`
const Description = styled.p`
  width: 400px;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
`
const CarImage = (image) => {
    switch(image) {
        case 'Bugatti':
            return BugattiImg
        case 'Ferrari':
            return FerrariImg
        default:
            return LamborghiniImg
    }
}

export default ({pageContext:{img,description}}) => (
  <Layout>
    <Head>
      <h1>{img}</h1>
      <CardCar src={CarImage(img)} alt="bugatti" />
      <Description>
        {description}
      </Description>
    </Head>
  </Layout>
)
