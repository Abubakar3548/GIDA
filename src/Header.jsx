import picture from "./assets/images/logo 1.png"
import './header.css'


function Header(){

    return(
        <div>
            <header>
                <nav>
                <img src={picture} alt="poto" width={90} />
                <div className="logo">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Rentals</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <div className="icon">
                    <i class="fa-solid fa-person-dress"></i>
                        <button>Sign in</button>
                    </div>
                    <div className="red">
                    <i class="fa-solid fa-plus" className="redicon"></i>
                    Post Listening
                    </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
export default Header