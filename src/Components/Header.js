import {Link} from 'react-router-dom';
const Header = () => {
    return ( 
        <section id="showcase">
            <div className="showcase">
            <h3 className="title">Hi Iam Ahmad</h3>
            <div className="content">   
                My Name is Ahmad Ibrahim based in Nigeria, Adamawa State, Yola.
                currently a fullstack webdeveloper student at <a href="https://openclassrooms.com" target="_blank">openClasrooms </a>
                My goal is to become a software developer in near future.
                i like anything thats technology related starting from web, software developtment, video games and blockchain technology. 
                Iam also a sales manager at rufai engine Engine Oil And spare parts Yola.
                
                <Link to="/About" className='btn'> More About Me</Link>
            </div>
            </div>
        
        <div className="menu">
            <h3 className="title">My Skills</h3>
            <div className="content">
                <div className="tools-icon">Html</div>
                <div className="tools-icon">Css</div>
                <div className="tools-icon">Javascript</div>
                <div className="tools-icon">Bootsrap</div>
                <div className="tools-icon">React</div>
                <div className="tools-icon">wordpress</div>
            </div>
        </div>
        </section>
    );
}
 
export default Header;