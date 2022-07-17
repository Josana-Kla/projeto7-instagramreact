import Icons from "../../Icons";

function Desktop() {
    return (
        <header class="topo">
            <nav class="desktop-nav">
                <div class="logos">
                    <Icons iconName="logo-instagram" />
                    <img src="./assets/img/logo.png" alt="logo-instagram"/>
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