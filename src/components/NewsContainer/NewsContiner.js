import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/index'


import Bbc from '../Bbc/Bbc';
import FirstNews from '../FirstNews/FirstNews';
import Gizmodo from '../Gizmodo/Gizmodo';
import SkySport from '../SkySport/SkySport';
import TechCrunch from '../TechCrunch/TechCrunch';

import './NewsContainer.css';
class NewsContiner extends Component {
    
// MAKE api calls inside compnent did mount here if your are using redux

    render() {
        console.log(this.props)
        const {allNews, newsLoaded} = this.props
        return (
            <div >
               {newsLoaded ?  <div className="newsContainer">
                   <TechCrunch news={allNews.tech_crunch} />
                   <FirstNews news={allNews.first_news} />
                   <Bbc news={allNews.bbc}/>
                   <Gizmodo news={allNews.gizmodo} />
                   <SkySport news={allNews.sky_sport} />
               </div>  : 
               
               'Loading...'  } 
               {/* <Bbc news={this.props.allNews.bbc} /> */}
            </div>
        )
    }
}

// this.props === state.allNews
// const mapStateToProps = state => {
//     return { bbc: state.allNews.bbc,
//              gizmodo: state.gizmodo }
// }

// export default connect(mapStateToProps, { fetchNews })(NewsContiner);
export default NewsContiner;