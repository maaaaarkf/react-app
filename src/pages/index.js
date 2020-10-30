import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Card from "../components/card"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section"
import Wave from "../components/Wave"
import staticdata from '../../staticdata.json'
import Cell from "../components/cell.js"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 700;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 40px;
  grid-column-gap: 40px;
  
  @media(max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }

`

const IndexPage = () => (
  <div>
    <Header />
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>Learn to<br />design and code<br />modern apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the Video</Link>
        <Wave />
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50px" />
          <img src={require('../images/logo-figma.png')} width="50px" />
          <img src={require('../images/logo-studio.png')} width="50px" />
          <img src={require('../images/logo-framer.png')} width="50px" />
          <img src={require('../images/logo-react.png')} width="50px" />
          <img src={require('../images/logo-swift.png')} width="50px" />
        </div>
      </div>
    </div>
    <div className="Cards">
      <h2>11 Courses, more coming</h2>
      <div className="CardGroup">
        <Card title="Design System" text="10 sections" image={require("../images/wallpaper.jpg")}></Card>
        <Card title="React for Designers" text="12 sections" image={require("../images/wallpaper2.jpg")}></Card>
        <Card title="Sound Design" text="9 sections" image={require("../images/wallpaper3.jpg")}></Card>
        <Card title="Swift UI" text="18 sections" image={require("../images/wallpaper4.jpg")}></Card>
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={'https://cl.ly/1U1F170x3D0L/download/logo-react-small.png'}/>
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
