import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">by <a href="https://salemaziel.com" target="_blank" rel="nofollow noopener">SalemAziel</a>  &copy; RBL Art Designs</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
