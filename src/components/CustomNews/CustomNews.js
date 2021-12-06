import React from 'react'
import PropTypes from 'prop-types'

/** 
 * A news display template component that accepts an array of news object and renders them based on the key value pairs they contain.
*/

const CustomNews = ({news}) => {
    
    return (
        <div>
            {/* <img src={imgSrc}/> */}

            {
                news.map(news => {
                    return  (<div className="newsWrapper" key={news.title}>
                        <a  href={news.title_link}>{news.title}</a>
                        <p>{news.detail}</p>
                        {news.location && <p>{news.locaiton}</p>}
                        { (news.author && news.author_link) ? <a href={news.author_link}>{news.author}</a> :
                        (news.author ? <p>{news.author}</p> : '')}
                        <p>{news.record_time}</p>
                        {news.news_time && <p>{news.news_time}</p>}
                        {news.type &&   <p>{news.type}</p>}
                    </div>)
                })
            }
        </div>
    )
}

export default CustomNews;

CustomNews.prototype = {
    /** news news */
    news: PropTypes.string
}

// eslint-disable-next-line react/no-typos
CustomNews.defaultprops = {
    news: 'normal',
}

