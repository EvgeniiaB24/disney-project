import React,{useEffect} from 'react'
import styled from "styled-components"
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from "./Viewers"
import db from "../Firebase"
import {collection,getDocs} from "firebase/firestore"
import {setMovies} from "./movieSlice"
import {useDispatch} from "react-redux"




function Home() {
    const dispatch = useDispatch()

    useEffect (() => {
        const moviesCollection = collection(db,"movies")
        getDocs(moviesCollection)
        .then((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return {id:doc.id,...doc.data()}
            })
            dispatch(setMovies(tempMovies))
        })
    },[])
    return (
        <Container>
             <ImgSlider/> 
             <Viewers/>
             <Movies/> 
        </Container>
    )
}


export default Home;

const Container = styled.main`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vh + 5px);
position:relative;
overflow-x:hidden;
&:before {
    background: url("/images/home-background.png")center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index:-1;
}
`



