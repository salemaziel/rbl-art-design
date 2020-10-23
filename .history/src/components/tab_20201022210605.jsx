import React from 'react'
import pic01 from '../images/pic01.jpg'
import PropTypes from 'prop-types'
import { render } from 'node-sass'



const Tab = (props, children) => {
    return(
        <>
        <h2 className="major">{props.title}</h2>
          <span className="image main">
            <img src={props.image} alt="" />
          </span>
          <p>
            {props.text1}
          </p>
          <p>
            {props.text2}
          </p>

          <p>
              {props.text3}
          </p>

        {children}

        </>
    )
};



export default Tab