import PropTypes from 'prop-types'
import React from 'react'

import  { Logo250WShadow } from '../images/index'

import CalendlyButton from './CalendlyButton'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={Logo250WShadow} alt="RBL Art Logo" />
    </div>
    <div className="content">
      <div className="inner">
        <h1 style={{textShadow: '2px 2px 4px gray', display: 'none'}}>RBL Art Design</h1>
        <h2 style={{textShadow: '2px 2px 4px gray'}}>
          Web Design For The Modern World {' '}
          
          
        </h2>
        <CalendlyButton />
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
           Artist BioLink Pages
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Custom WebDesign Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About RBL Art
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
