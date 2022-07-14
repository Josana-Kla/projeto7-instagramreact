import React from "react";

function Desktop() {
    return (

        <header className="topo">
            <nav className="desktop-nav">

            <div className="logos">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./assets/img/logo.png" alt="logo-instagram"/>
            </div>

            <input type="search" placeholder="Pesquisar"/>

            <div className="icones-topo">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>

            </nav>
        </header>

    )
}

export default Desktop;