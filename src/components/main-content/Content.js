import Sidebar from "./sidebar/SIdebar";
import Story from "./stories/Story";
import Timeline from "./timeline/Timeline";

function Content() {
    return (
        <div>
            <div class="fundo-timeline">
                <div class="feed-e-sidebar">
            
                    <div class="feed"> 
                        <Story />
                        <Timeline />
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}


export default Content;