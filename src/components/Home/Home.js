import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Developers from '../Developers/Developers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {

    const [developers, setDevelopers] = useState([])

    useEffect( ()=>{
        const url = '/developers.JSON';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDevelopers(data.results))
        .catch(error => console.log(error))

    }, [])


    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <main>
                <Developers developers={developers} ></Developers>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;