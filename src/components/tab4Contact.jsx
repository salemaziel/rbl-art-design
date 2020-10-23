import React from 'react'
import pic01 from '../images/pic01.jpg'
import PropTypes from 'prop-types'

import ContactForm from './contactForm'



const TabContact = (props) => {

    return(
<>
<h2 className="major">{props.title}</h2>
<ContactForm />

<ul className="icons">
  <li>
    <a
      href="https://twitter.com/HuntaroSan"
      className="icon fa-twitter"
    >
      <span className="label">Twitter</span>
    </a>
  </li>
  <li>
    <a href="https://codebushi.com" className="icon fa-facebook">
      <span className="label">Facebook</span>
    </a>
  </li>
  <li>
    <a href="https://codebushi.com" className="icon fa-instagram">
      <span className="label">Instagram</span>
    </a>
  </li>
  <li>
    <a
      href="https://github.com/codebushi/gatsby-starter-dimension"
      className="icon fa-github"
    >
      <span className="label">GitHub</span>
    </a>
  </li>
</ul>



        </>
    )
}


export default TabContact
















