import './restaurants.css'
import first from './first_phone.webp'
import second from './second_phone.webp'
import google from './googleplay.webp'
import appstore from './appstore.webp'

function Restaurant(){
    return(
        <section className='restaurants'>
            <div className="left_stuff">
                <h2>Restaurants in your pocket</h2>
                <p>Order from your favorite restaurants &#38; track on the go, with the all-new Swiggy app.</p>
                <div className='downbutton_container'>
                    <button className="download_buttons" id="googleplay" >
                        <img src={google} alt="download on google play" />
                    </button>
                    <button className="download_buttons" id="appstore" >
                        <img src={appstore} alt="download on appstore" />
                    </button>
                </div>
            </div>
            <div className="phone_container">
                <img src={first} alt="smd" />
                <img src={second} alt="smd" />
            </div>
        </section>
    );
}

export default Restaurant;