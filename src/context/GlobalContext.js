import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {

    // for more complex state you might set up useReducer for Redux-like state updates
    const [newss, setNewss] = useState([]);

    const getOneNews = (title) => {
        debugger
        return newss.findIndex(news => {
            return title == news.title
        }
        )
    }

    // useEffect is a lifecycle method for function components, run once after mount
    useEffect(() => {

        // the callback to useEffect can't be async, but you can declare async within
        async function fetchData() {
            // use the await keyword to grab the resolved promise value
            // remember: await can only be used within async functions!
            const { data } = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=d900294114274503a5fe108dc2d1a8d2`
            );
            debugger
            // update local state with the retrieved data 
            setNewss(data.articles);
        }

        // fetchData will only run once after mount as the deps array is empty 
        fetchData();
    }, []);
    return (
        <APIContext.Provider
            // Add required values to the value prop within an object (my preference)
            value={{
                newss, getOneNews
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}

