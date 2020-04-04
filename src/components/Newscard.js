import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import man from '../images/man.png';

export const Newscard = ({ article }) => {
    dayjs.extend(relativeTime);
    return (
        <div className="news-card">
            <div className="left">
                <img src={article.urlToImage} />
            </div>
            <div className="right">
                <div className="content">
                    <h3>{article.description}</h3>
                    <p className="ago">{dayjs(article.publishedAt).fromNow()}</p>
                    {article.author ? <div className="author">
                        <img src={man} /><p>{article.author}</p>
                    </div> : null}

                </div>
            </div>
        </div>
    )
}
