import React from 'react'

const TechCrunch = ({news}) => {
    return (
        <div>
             {
             news.map(news => {
                return  (<div className="newsWrapper" key={news.title}>
            <img src='data:image/png;base64,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'/>

                    <a href={news.title_link}>{news.title}</a>
                    <p>{news.detail}</p>
                    {/* <p>{news.locaiton}</p> */}
                    <p>{news.author}</p>
                    <p>{news.record_time}</p>
                    {/* <p>{news.news_time}</p> */}
                </div>)
             })
             }
        </div>
    )
}

export default TechCrunch
