import Icons from "../../Icons";
import LogoInsta from "../LogoInsta";

function Mobile() {
    return (
        <header>
            <nav class="mobile-nav">
                <Icons iconName="logo-instagram" />
                <LogoInsta logo="./assets/img/logo.png" name="logo-instagram"/>
                <Icons iconName="paper-plane-outline" />
            </nav>
        </header>
    )
}

export default Mobile;