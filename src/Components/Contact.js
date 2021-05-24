const Contact = () => {
    return ( 
        <section id="contact" className="contact">
            <h3 className="title">Contact Me</h3>
            <div className="contact-container">
                <div className="contact-form">
                    <form action="">
                        <div className="form-input">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="form-input">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="form-input">
                            <input type="text" placeholder="Subject"/>
                        </div>
                        <div className="form-textarea">
                            <textarea placeholder="text Message"></textarea>
                        </div>
                        <div className="form-input">
                            <input type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
                
                <div className="contact-info">
                    <div className="info-box">
                        <div className="icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                    <div className="details">
                        <h4>Address</h4>
                            <p>No.25 Rabeh Street, Yola. Adamawa State Nigeria.</p>
                    </div>
                    </div>
                    <div className="info-box">
                        <div className="icon">
                            <i class="far fa-envelope"></i>
                         </div>
                    <div className="details">
                        <h4>Email</h4>
                            <a href="mailto:elahmad95@gmail.com" target="_blank">elahmad95@gmail.com</a>
                    </div>
                    </div>
                    <div className="info-box">
                        <div className="icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                         <div className="details">
                            <h4>Call</h4>
                            <a href="tel:+2348164336141" target="_blank">+2348164336141</a>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="icon">
                            <i class="fab fa-whatsapp"></i>
                        </div>
                        <div className="details">
                            <h4>Whatsapp</h4>
                            <a href="https://wa.me/+2348164336141" target="_blank">+2348164336141</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;