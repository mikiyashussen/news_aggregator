import React from 'react'

const Gizmodo = ({news}) => {
    return (
        <div>
             {
             news.map(news => {
                return  (<div className="newsWrapper" key={news.title}>
                    <a href={news.title_link}>{news.title}</a>
                    <a href={news.detail_link}>{news.detail}</a>
                    {/* <p>{news.locaiton}</p> */}
                    <a href={news.author_link}>{news.author}</a>
                    <p>{news.record_time}</p>
                    <p>{news.news_time}</p>
                </div>)
             })
             }
        </div>
    )
}

export default Gizmodo
