import { Link } from 'react-router-dom';
import videos from "./data/db.json";

const Patinage = () => {


    return (
        <div className="Patinage">
            <div className="Front-Panel">
                <h1>Patinage</h1>
                <h3>Filtres (en développement...)</h3>
                <div className="filtres">
                    <form action="/lavantagedelaglace/patinage">
                        <div className="filtre">
                            <label for="avant">Patinage avant</label>
                            <input type="checkbox" id="avant" name="avant" value="avant"></input>
                        </div>
                        <div className="filtre">
                            <label for="arriere">Patinage à reculons</label>
                            <input type="checkbox" id="arriere" name="arriere" value="arriere"></input>
                        </div>
                        <div className="filtre">
                            <label for="vitesse">Vitesse</label>
                            <input type="checkbox" id="vitesse" name="vitesse" value="vitesse"></input>
                        </div>
                        <div className="filtre">
                            <label for="agilite">Agilité</label>
                            <input type="checkbox" id="agilite" name="agilite" value="agilite"></input>
                        </div>

                        <input type="submit" value="Filtrer" />
                    </form>
                </div>

                <div className="videos">
                    <div className='row'>
                        <Link to={"/lavantagedelaglace/video/" + videos[0].id} className="single-video-display">
                            <img src={videos[0]['thumbnail-url']} alt={videos[0].title} />
                            <h4>{videos[0].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[1].id} className="single-video-display">
                            <img src={videos[1]['thumbnail-url']} alt={videos[1].title} />
                            <h4>{videos[1].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[2].id} className="single-video-display">
                            <img src={videos[2]['thumbnail-url']} alt={videos[2].title} />
                            <h4>{videos[2].title}</h4>
                        </Link>
                    </div>
                    <div className='row'>
                    <Link to={"/lavantagedelaglace/video/" + videos[3].id} className="single-video-display">
                            <img src={videos[3]['thumbnail-url']} alt={videos[3].title} />
                            <h4>{videos[3].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[4].id} className="single-video-display">
                            <img src={videos[4]['thumbnail-url']} alt={videos[4].title} />
                            <h4>{videos[4].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[5].id} className="single-video-display">
                            <img src={videos[5]['thumbnail-url']} alt={videos[5].title} />
                            <h4>{videos[5].title}</h4>
                        </Link>
                    </div>
                    
                    
                </div>

                <div className="pages">
                    <h3>Pages</h3>
                    <p>En développement...</p> 
                </div>
            </div>
        </div>
    );
}
 
export default Patinage;