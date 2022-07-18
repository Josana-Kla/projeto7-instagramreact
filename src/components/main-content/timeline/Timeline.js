import Icons from "../../Icons";

const menuTimelines = [
  { storyImage:"./assets/img/story2.png", title:"meowed", postImage:"./assets/img/gato-telefone 1.png", namePostImage:"gato-telefone", imageUserLiked:"./assets/img/respondeai 2.png", nameUserLiked:"respondeai", numberLikes:"101.523" },
  { storyImage:"./assets/img/story3.png", title:"barked", postImage:"./assets/img/dog 1.png", namePostImage:"cachorro", imageUserLiked:"./assets/img/adorableanimals 2.png", nameUserLiked:"adorable_animals", numberLikes:"99.159" },
  { storyImage:"./assets/img/story2.png", title:"meowed", postImage:"./assets/img/gato 2.png", namePostImage:"gato-2", imageUserLiked:"./assets/img/seguir2.png", nameUserLiked:"chibirdart", numberLikes:"30.159" }
  //{ storyImage:"./assets/img/jambt.jpg", title:"jambt", postImage:"", namePostImage:"", imageUserLikes:"./assets/img/respondeai 2.png", nameUserLiked:"respondeai", numberLikes:"101.523" }
]


function Timeline() {
  return (
    <div>
      {menuTimelines.map(menuTimeline => (
        <div class="linha-do-tempo">
          <div class="menu-da-foto">
            <div>
              <img src={menuTimeline.storyImage} alt={menuTimeline.title}/>
              <p>{menuTimeline.title}</p>
            </div>
            <Icons iconName="ellipsis-horizontal-outline" />
          </div>

          <img src={menuTimeline.postImage} alt={menuTimeline.namePostImage} />
          
          {/*  <video controls="controls" autoplay="autoplay">
            <source src="./assets/video/video.mp4" type="video/mp4"/>
            <source src="./assets/video/video.ogv" type="video/ogv"/>
            </video> */}


          <div class="icones-acoes-imagem"> 
            <div>
              <Icons iconName="heart" class="" />
              <Icons iconName="chatbubble-outline" />
              <Icons iconName="paper-plane-outline" />
            </div>
            <Icons iconName="bookmark-outline" />
          </div>

          <div class="descricao-acoes-foto">
            <img src={menuTimeline.imageUserLiked} alt={menuTimeline.nameUserLiked}/>
            <p>
              Curtido por <strong>{menuTimeline.nameUserLiked}</strong> e <strong>outras {menuTimeline.numberLikes} pessoas</strong>
            </p>
          </div>

        </div>
      ))}
    </div>
  )
}


export default Timeline;