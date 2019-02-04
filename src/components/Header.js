import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-cloud"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Joris Suppers</h1>
                <p>A Software Engineer passionate in developing home automation solutions.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="static/Resume.pdf" target="_blank"><span className="icon fa-user"></span></a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('publications')}}><span className="icon fa-book"></span></a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
