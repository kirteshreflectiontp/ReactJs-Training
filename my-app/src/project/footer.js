const Footer = () => {
    return(
        <>
        <footer>
        <div class="footer-bg-img"><img src="./images/footerBG Image.png" width="100%"/></div>
        <div class="left-footer">
            <div class="footer-logo"><img src="./images/footer new logo.png" class="new-logo"/></div>
            <div class="footer-text">
                <p>Lorum ipsum dolor sit amet,consectator adipising elit, sed do <br/>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo viver <br/>
                    ra maecenas accumsan lacus vel facilisis.</p>
                <div class="footer-location">
                    <div class="footer_flex">
                        <div><i class="fa-solid fa-location-dot footer-address"></i></div>
                        <div> Main Road,Building Name,Country</div>
                    </div>
                    <br/>
                    <div class="footer_flex">
                        <div><i class="fa-solid fa-envelope footer-mail"></i></div>
                        <div>info@companyname.com</div>
                    </div>
                </div>
            </div>


            <div class="footer-bottom">
                <div class="footer-copyright">@Company Name 2020.All rights reserved.</div>

                <div class="right-footer">
                    <div class="social-link">

                        <i class="fa-brands fa-instagram icon i-footer-color"></i>

                        <i class="fa-brands fa-facebook-f i-footer-logo"></i>

                        <i class="fa-brands fa-twitter icon i-footer-color"></i>

                        <i class="fa-brands fa-whatsapp icon i-footer-color"></i>

                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer;