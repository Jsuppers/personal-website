import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="publications" className={`${this.props.article === 'publications' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Publications</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <div style={{textAlign: 'justify'}}>
            <h3>PhD Thesis</h3>
            <p>Suppers, J. (2018): Suppers, J. (2018). Impacts of new technologies on household electricity demand: From an individual household, a community, and a national perspective. The University of Waikato, Hamilton, New Zealand. https://hdl.handle.net/10289/11923</p>

            <h3>Published Papers</h3>
            <p>Suppers, J. and Apperley, M. (2016): Energy Behaviour in a Community of Smart Homes. Paper presented at The Energy Cultures Conference, Wellington, New Zealand.</p>
            <p>Suppers, J. and Apperley, M. (2015): Interactive solar panel simulation tool - From Global Horizontal Irradiance to PV output. Proceedings of the INTERACT 2015 Workshop on Fostering Smart Energy Applications through Advanced Visual Interfaces. FSEA '15, September 2015, Bamberg, Germnay. http://dx.doi.org/10.1145/2598153.2602224.</p>
            <p>Suppers, J. and Apperley, M. (2014): Developing useful visualisations of domestic energy usage. Proceedings 7th International Symposium on Visual Information Communication and Interaction (VINCI), Sydney, August 5-8. ACM, 140-148.</p>
            <p>Suppers, J. and Apperley, M. (2014): Why aren't we all living in Smart Homes? Proceedings of the AVI 2014 Workshop on Fostering Smart Energy Applications through Advanced Visual Interfaces. FSEA '14, May 27 2014, Como, Italy. Published as University of Waikato Computer Science Working Paper, 01/2014, 17-21. http://dx.doi.org/10.1145/2598153.2602224.</p>
            <p>Suppers, J. and Apperley, M. (2014): Casual Mobile Screen Sharing. Proceedings of the Fifteenth Australasian User Interface Conference. AUIC '14, Auckland, New Zealand.</p>

            <h3>Co-Authored</h3>
            <p>Apperley, M. and Monigatti, P and Suppers, J.(2015): Grid-Lite: A network integrated semi-autonomous local area electricity system. Proceedings of the 4th International Conference on Green IT Solutions (ICGREEN 2015), July 9-10, 2015, Milan, Italy.</p>
          </div>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main