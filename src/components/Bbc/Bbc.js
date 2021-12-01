import React from 'react'

import './Bbc.css'
const Bbc = ({news}) => {
    console.log('bbc',news)
    return (
        <div >
            {
                
                news.map(news => {
                    return  (<div className="newsWrapper" key={news.title}>
                        <a href={news.title_link}>{news.title}</a>
                        <p>{news.detail}</p>
                        <p>{news.locaiton}</p>
                        <p>{news.record_time}</p>
                        <p>{news.news_time}</p>
                    </div>)
                })
            }
        </div>
    )
}

export default Bbc;
