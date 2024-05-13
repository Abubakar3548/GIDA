import picture from "./assets/images/logo 1.png"
import "./important.css"

function Important(){

    return( 
        <main>
            <h2>Important Articles</h2>
                    <i  class="fa-solid fa-window-minimize"></i>

        <div className="important">     
                    <div className="EAT">
                        <img src="./src/assets/images/EAT.png" alt=""  width={720} height={530}/>
                        <span>Febuary 4, 2023</span>
                        <h2>Top Tips for Finding the Perfect Rental</h2>
                        <p>Discover expert advice on how to find idea rental property that meets your needs and budget.</p>
                    </div>
                    <div className="imagesBuild">
                        <img src="./src/assets/images/parallax-02.png" alt="" />
                        <img src="./src/assets/images/parallax-01.png" alt="" />
                        <img src="./src/assets/images/parallax.png" alt="" />
                        <img src="./src/assets/images/parallaxy.png" alt="" />
                    </div>
                    <div className="contents">
                        <div className="may-7">
                            <h3>May 7, 2023</h3>
                            <h2>Car Rental Hacks for a smooth Journey</h2>
                            <p>Learn inside tipd for getting the best deals and making the most of your rental car experience.</p>
                        </div>
                        <div className="April-25">
                            <h3>April 25, 2023</h3>
                            <h2>Managing Your Rental Items:A Comprehensive Guide</h2>
                            <p>Get valuable insights on how to effectively manage and maintain your rented items.</p>
                        </div>
                        <div className="January">
                            <h3>January 2, 2023</h3>
                            <h2>Navigate the Rental Market: Insights for New Renters</h2>
                            <p>Explore Key consideration and useful tips for individuals new to the rental market.</p>
                        </div>
                        <div className="April-7">
                            <h3>April 7, 2023</h3>
                            <h2>Maximizing Returns: Strategies for Rental property Owners</h2>
                            <p>Learn strategies to optimize the return on investment for your rental property.</p>

                        </div>

                    </div>
                </div>
                <div className="GIDA">
                    <div className="gida">
                        <img src={picture} alt="poto" width={90} /> 
                        <p>SriLanka's first & lagest platform designed to create <br /> an online marketplace exclusive for RENT</p>
                        <div className="icons">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>

                        </div>
                    </div>
                    <div className="NAvigation">
                        <span>Navigation</span>
                        <h4>About Us </h4>
                        <h4>Bog</h4>
                        <h4>Term of Use</h4>
                        <h4>Privacy Policy</h4>

                    </div>
                    <div className="location">
                        <span>Featured Location</span>
                        <h4>Kandy </h4>
                        <h4>Anuradhapura</h4>
                        <h4>Badulla</h4>
                        <h4>Colombo</h4>
                        <h4>Kaluthara</h4>
                    </div>
                    <div className="help">
                        <span>Help</span>
                        <h4>FAQ</h4>
                        <h4>Contact Us</h4>

                    </div>

                </div>
                </main>


    )
}

export default Important