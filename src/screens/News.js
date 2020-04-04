import React from 'react';
import { useAPI } from '../context/GlobalContext';

export const News = () => {
    const { getOneNews } = useAPI();
    const news = getOneNews('Trump was again pushing an anti-malarial drug despite caution from leading health experts, while Cuomo says New York apex is four to eight days away');
    debugger
    return (
        <div>
            <h1>Newssssss</h1>
        </div>
    )
}
