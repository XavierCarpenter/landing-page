import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
  
`
const PlaceHolder = styled.div`
background: green;
height: 480px;
width: 80%;
`


const PreviewCard = ({ content }) => (
    <Container>

        <h3>{content.title}</h3>
        <PlaceHolder></PlaceHolder>
        <h2>{content.spotlightText}</h2>
        <p>{content.description}</p>
        <button>{content.btnText}</button>

    </Container>
)



export default PreviewCard
