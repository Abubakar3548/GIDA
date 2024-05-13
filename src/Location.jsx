import "./location.css"


function Location(){

    return(
        <footer>
            <h1>Featured Location</h1>
            <i id="window" class="fa-solid fa-window-minimize"></i>
            <div className="feature">
                <div className="kandy">
                <img src="./src/assets/images/Rectangle 2187.png" alt="poto" width={300}  />
                <h2>Kandy</h2>
                </div>
                <div className="build">
                    <img  src="./src/assets/images/Rectangle 2188.png" alt="" width={300} />
                    <h2>Anurahapura</h2>
                    <img className="rec" src="./src/assets/images/Rectangle 30.jpeg" alt=""  width={300} height={200} />
                    <h3>Gampaha</h3>
                </div>
                <div className="build-2">
                    <img src="./src/assets/images/Rectangle 2190.png" alt="" width={300}  />
                    <h2>Badulla</h2>
                    <img className="jaf" src="./src/assets/images/Rectangle 2191.png" alt="" width={300} />
                    <h3>Jaffna</h3>
                </div>
                <div className="col">
                <img src="./src/assets/images/Rectangle 2192.png" alt="" width={300}  />
                <h2>COLombo</h2>
                </div>

 
            </div>
        </footer>

    )
}
export default Location
