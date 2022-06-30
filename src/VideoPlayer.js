import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import videos from "./data/db.json"

const VideoPlayer = () => {
    const { id } = useParams();
    
    return (
        <div className="video-player">
            <div className="Front-Panel">
                <h1> {videos[id-1].title} </h1>
                <div className="video">
                    <ReactPlayer controls url= {videos[id-1]["vid-url"]} />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati placeat. Dolorem, iusto libero inventore error earum provident. Sed illo libero similique sit doloribus alias molestias, possimus ut explicabo exercitationem.</p>
                
            </div>
            
        </div>
    );
}
 
export default VideoPlayer;