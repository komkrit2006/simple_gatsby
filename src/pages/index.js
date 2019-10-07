import React from "react"
import Layout from "../components/layout"
import { connect } from "react-redux"
import { updateText } from "../action"
import styled from "styled-components"

const Head = styled.div`
  text-align: center;
`

const Home = props => {
  return (
    <Layout>
      <Head>
        <h1>Gatsby</h1>
        <p>Welcome in this web this web is simple build by gatsby</p>
        <button type="button" onClick={() => props.updateText("Let's Get Start")}>
          Let's get start
        </button>
        <h1>{props.text}</h1>
      </Head>
    </Layout>
  )
}

const mapStateToProps = state => ({
  text: state.text,
})
const mapDispatchToProps = dispatch => ({
  updateText: data => dispatch(updateText(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
