import React from 'react'

const SkySport = ({news}) => {
    return (
        <div>
             {
             news.map(news => {
                return  (<div className="newsWrapper" key={news.title}>
                    <a href={news.title_link}>{news.title}</a>
                    <p>{news.detail}</p>
                    {/* <p>{news.locaiton}</p> */}
                    <p>{news.record_time}</p>
                </div>)
             })
             }
        </div>
    )
}

export default SkySport
