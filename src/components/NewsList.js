import React from 'react'
import { useAPI } from '../context/GlobalContext';
import { Newscard } from '../components/Newscard';

export const NewsList = () => {
    const { newss } = useAPI();
    debugger
    return (
        <div className="news-list">
            {newss.map(news => (
                <Newscard article={news} />
            ))}
        </div>
    )
}
