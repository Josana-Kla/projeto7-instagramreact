const sidebarLists = [
    { image:"./assets/img/seguir1.png", title:"bad.vibes.memes", follow:"Segue você" },
    { image:"./assets/img/seguir2.png", title:"chibirdart", follow:"Segue você" },
    { image:"./assets/img/seguir3.png", title:"razoesparaacreditar", follow:"Novo no Instagram" },
    { image:"./assets/img/seguir4.png", title:"adorable_animals", follow:"Segue você" },
    { image:"./assets/img/seguir5.png", title:"smallcutecats", follow:"Segue você" }
]

function SugestionList() {
    return(
        <div class="lista-sugestoes">
            <div class="texto-sugestoes">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            {sidebarLists.map(sidebarList => (
                <div class="lista">
                    <div class="cada-sugestao">
                        <img src={sidebarList.image} alt={sidebarList.title} />
                        <div>
                            <p>{sidebarList.title}</p>
                            <p>{sidebarList.follow}</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
            ))}
        </div>
    )
}

export default SugestionList;