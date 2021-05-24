import Pimage from '../img/filmfes.jpg';
import Pimage1 from '../img/realestate.jpg';
const Project = () => {
    return (  
        <div className="project" id="project">
            <h3 className="project">my projects </h3>
            <div className="card-container">
             <div className="card">
                 <img src={Pimage1} className="img" alt="loading.."/>
                 <div className="info">
                     <h4 className="title">Real Estate Website</h4>
                     <div className="tools">
                         <span>Css</span>
                         <span>Wordpress</span>
                     </div>
                     <p className="desc">this is a wordpress theme integrated for realsestate portfolio</p>
                     <a href='http://admland.atwebpages.com/' className="btn" target='_blank'>view it</a>
                 </div>               
             </div>
             <div className="card">
                 <img src={Pimage} className="img" alt="loading.."/>
                 <div className="info">
                     <h4 className="title">festube</h4>
                     <div className="tools">
                         <span>html</span>
                         <span>Css</span>
                         <span>Bootstrap</span>
                     </div>
                     <p className="desc">this is a website created for film festival.</p>
                     <a href='http://festube.netlify.app' target="_blank" className="btn">view it</a>
                 </div>               
             </div>
             </div>
        </div>
    );
}

export default Project;