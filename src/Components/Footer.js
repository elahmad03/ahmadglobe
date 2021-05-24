const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return ( 
        <footer className="footer">
            <ul className="social-icons">
                <li><a href="https://www.twitter.com/ahmadkhan03"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.github.com/elahmad03"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/elahmad03"><i className="fab fa-linkedin"></i></a></li>
            </ul>
            <div className="copyright"> &copy; {year} Ahmadglob all right reserved</div>
        </footer>
     );
}
 
export default Footer;