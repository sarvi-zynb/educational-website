import React from "react";
import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import Feature from "../components/body/feature/Feature"
import Cards from '../components/body/freeCourse/Cards'
import './App.css'

function App() {
    return (
        <>
            <NavBar />
            <Header />
            <Feature />
            <Cards />
        </>
    );
}

export default App;
