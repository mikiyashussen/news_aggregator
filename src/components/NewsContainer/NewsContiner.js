import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/index'

import CustomNews from '../CustomNews/CustomNews';
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
                   <CustomNews news={allNews.tech_crunch} />
                   <CustomNews news={allNews.first_news} />
                   <CustomNews news={allNews.bbc}/>
                   <CustomNews news={allNews.gizmodo} />
                   <CustomNews news={allNews.sky_sport} />
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