import React from 'react'

const FirstNews = ({news}) => {
    return (
        <div>
             {
             news.map(news => {
                return  (<div className="newsWrapper" key={news.title}>
            
                    <a href={news.title_link}>{news.title}</a>
                    <p >{news.detail}</p>
                    {/* <p>{news.locaiton}</p> */}
                    <p>{news.record_time}</p>
                    <p>{news.type}</p>
                </div>)
             })
             }
        </div>
    )
}

export default FirstNews
