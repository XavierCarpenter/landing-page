import React from "react"
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
import styled from "styled-components"

// import "./header.css"

// Styles
const Container = styled.header`
     background: #f2f2f2; 
    font-family: 'Roboto', sans-serif;
`
const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    padding: 16px;  
`
const Logo = styled.h1`
   margin-left: 24px;
    font-size: 24px;
    &:hover {
      cursor: pointer;
    }
`
const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  font-weight: 500;
  li{
    margin: 16px;
  }
  a {
      text-decoration: none;
  }
`
const SignInOut = styled.p`
margin:16px;
font-weight:500;
`

const Header = ({ siteTitle }) => (
    <Container>
        <HeaderContent>
            <Logo>
                <Link to="/">{siteTitle}</Link>
            </Logo>
            <NavLinks>
                <li>About Us</li>
                <Link to="/blogs">
                    <li>Blogs</li>
                </Link>
                <Link to="/products">
                    <li>Products &amp; Pricing</li>
                </Link>
            </NavLinks>
            <SignInOut>Sign in</SignInOut>
        </HeaderContent>
    </Container>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
