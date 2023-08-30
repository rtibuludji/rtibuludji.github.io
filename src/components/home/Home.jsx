import React, { useState } from "react";
import './Home.css'
import HomeSocial from "./HomeSocial";
import HomeData from "./HomeData";

function Home() {

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <HomeSocial />

                    <div className="home__img"></div>

                    <HomeData />
                </div>
            </div>
        </section>
    );
}

export default Home;