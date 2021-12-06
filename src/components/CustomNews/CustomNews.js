import React from 'react'

const CustomNews = ({news, imgSrc}) => {
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

export default CustomNews
