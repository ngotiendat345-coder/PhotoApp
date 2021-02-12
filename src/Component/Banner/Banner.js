import React from 'react'
import './Banner.scss';
import PropTypes from 'prop-types'

Banner.prototype = {
    title:PropTypes.string,
    background:PropTypes.string
}
Banner.defaultProps ={
    title:'',
    background:''
}

function Banner({title,background}){
    const backgroundStyle= background?{backgroundImage:`url(${background})`}:{};
    return(
        <section className="banner" style={backgroundStyle}>
            <h1 className="banner__title">{title}</h1>
            </section>
    )
}

export default Banner;