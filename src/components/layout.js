import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    background: darkslategray;
    padding: 15px 25px;
    margin: 0px;
    a {
        text-decoration: none;
        color: white;
        padding: 15px; 25px;
    }
    a:hover {
        color: gray;
    }
    li:first-of-type {
        margin-right: auto;

    }
`

const Footer = styled.div`
    background: darkslategray;
    padding: 15px; 25px;
    color: white;
    position: absolute;
    bottom: 0px;
    width: 100%;
`

export default ({children}) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        footerText
                        navbar {
                            text
                            path
                        }
                    }
                }
            }
        `
    )
    return (
        <Fragment>
        <NavBar>
            {data.site.siteMetadata.navbar.map(data => <li key={data.path}><Link to={data.path}>{data.text}</Link></li>)}
        </NavBar>
        {children}
        <Footer>{data.site.siteMetadata.footerText}</Footer>
    </Fragment>
    )
}

