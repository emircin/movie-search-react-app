import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../auth/firebase";


export const MovieContext = createContext();


export const MovieProvider = (props) => {



    const [pullMovie, setPullMovie] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [user, setUser] = useState(null);


    useEffect(() => {

    
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=b84f24a93ab3e28fa8f358f6360cf1d4')
            .then(response => response.json())
            .then(data => setPullMovie(data.results))
            console.log(pullMovie)

        auth.onAuthStateChanged((authUser) => {

            authUser ? setUser(authUser) : setUser(null)

        })

    }, []);

    const getMovie = async (searchQuery) => {

        const movie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b84f24a93ab3e28fa8f358f6360cf1d4&query=${searchQuery}`)
        const newMovie = [...movie?.data?.results]
        setPullMovie(newMovie)

    }


    return (
        <MovieContext.Provider value={{ setPullMovie, pullMovie, setSearchQuery, user, setUser, searchQuery, getMovie }}>
            {props.children}
        </MovieContext.Provider>
    )


};


