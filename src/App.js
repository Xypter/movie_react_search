import { userEffect } from 'react';

//e8a408ec

const API_URL = 'http://www.omdbapi.com?apikey=e8a408ec';

const App = () => {
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
    }
    
    useEffct(() => {

    }, []);
    
    return(
        <h1>App</h1>
    );
}

export default App;