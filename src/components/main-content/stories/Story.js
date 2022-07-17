import Icons from "../../Icons";

function Story() {
    const urls = [
        { title: "9gag", img:"./assets/img/story1.png" },
        { title: "meowed", img:"./assets/img/story2.png" },
        { title: "barked", img:"./assets/img/story3.png" },
        { title: "nathanwpyle...", img:"./assets/img/story4.png" },
        { title: "wawawiwac...", img:"./assets/img/story5.png" },
        { title: "respondeai", img:"./assets/img/story6.png" },
        { title: "filomoderna", img:"./assets/img/story7.png" },
        { title: "memeriago", img:"./assets/img/story8.png" }
    ]
    
    return (
        <div class="stories">
            {urls.map(url => (
                <div class="story">
                    <div class="fotos-story">
                        <img src="./assets/img/stories_background.png" alt="stories_background"/>
                        <div class="foto">
                            <img src={url.img} title={url.title} alt={url.title} />
                        </div>
                    </div>
                    <p>{url.title}</p>
                </div>
            ))}
            <Icons iconName="chevron-forward-circle"></Icons>
        </div>
    )
}

export default Story;