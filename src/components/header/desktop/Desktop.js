import Icons from "../../Icons";
import LogoInsta from "../LogoInsta";

function Desktop() {
    return (
        <header class="topo">
            <nav class="desktop-nav">
                <div class="logos">
                    <Icons iconName="logo-instagram" />
                    <LogoInsta logo="./assets/img/logo.png" name="logo-instagram"/>
                </div>

                <input type="search" placeholder="Pesquisar"/>

                <div class="icones-topo">
                    <Icons iconName="paper-plane-outline" />
                    <Icons iconName="compass-outline" />
                    <Icons iconName="heart-outline" />
                    <Icons iconName="person-outline" />
                </div>
            </nav>
        </header>
    )
}

export default Desktop;