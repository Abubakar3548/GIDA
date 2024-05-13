import './content.css'

function Content() {

    return(
        <main>
            <div className="middle">
                <h2>Discover Your <span>Perfect Rental</span></h2>
                <p>Rent Cars, Houses and Items in Just a Few clicks.</p>

                    <div className='btn'>
                    <button className='redBtn'>Places</button>
                    <button className='whiteBtn'>Rides</button>
                    <button className='whiteBtn'>Things</button>
                    </div>

                    <div className='searchLocation'>
                        <div className='input'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input className='text' type="text"placeholder='Search for cars, houses and more...' />
                        </div>
                        <div className='location'>
                        <i class="fa-solid fa-location-crosshairs"></i>
                         <h4>Search location</h4>
                        <i class="fa-solid fa-chevron-down"></i>
                        <i id='dashcube' class="fa-brands fa-dashcube"></i>
                        </div>
                        

                    </div>
                
            </div>
        </main>
    )
}

export default Content