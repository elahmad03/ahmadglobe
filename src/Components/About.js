import Thumbnail from '../img/elahmad2.jpg';
import Cv from '../files/cv_elahmad.pdf';
const About = () => {
    return ( 
        <section id="about">
            <div className="about">
                <h3 className="title">About Me</h3>
                <div className="content">
                    <div className="img">
                        <img src={Thumbnail} alt="loading" className='thumbnail' />
                    </div>
                    <p>Hi iam Ahmad ibrahim aka elahmad iam based in Nigeria, Adamawa State Yola. Currently a student at <a href='https://openclassrooms.com' target='_blank'>Openclassrooms</a>
                    learning fullstack webdeveloptment, my goal is to become a software developer.
                    i fell in love with technology since i was a teenager at the age of 15, it all started with playing games i play more games which lead me to thinking how these games where develope i begin searching on google how to develope game but i didnt find any answer then it was around 2010, but iam able to find a websites hat teaches how to create a website
                    but i just sticj to mobile website as i dont have a computer then. So i started learning using mobile website builder known as wapka thats where i learned how to build websites using only xhtml, css and some wapka tags with the help of my first mentor zero. and then i find a facebook developer circles Community thats where i got a scholaarship to advance my knowledge. 
                    </p>
                    <p>Apart From coding i love reading books and playing sport videdo games.</p>
                    <p>Currently i have a full time job as a sales manager at Rufai engine Oil and spare parts Yola. <br />
                        i work from 7.00am to 9.30pm. <br/>
                        <a href={Cv} target='_blank' className="btn" >My Curriculumn vitae</a>
                    </p>
                    
                </div>
            </div>
        </section>
     );
}
 
export default About;