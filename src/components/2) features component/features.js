import './features.css'
import minimun from './minimum.png';
import live from './live.png';
import fast from './fast.png';

function Features(){
    return(
        <section className = 'features'>
            <div className = "feature_container" id="mini_order">
                <img src = {minimun} alt = "feature1" />
                <h3>No Minimum Order</h3>
                <p>Order in for yourself or for the group, with no restrictions on order value</p>
            </div>
            <div className = "feature_container" id = "live_tracking">
                <img src = {live} alt = "feature2" />
                <h3>Live Order Tracking</h3>
                <p>Know where your order is at all times, from the restaurant to your doorstep</p>
            </div>
            <div className = "feature_container" id = "fast_delivery">
                <img src = {fast} alt = "feature3" />
                <h3>Lighting-Fast Delivery</h3>
                <p>Experience Swiggy's superfast delivery for food delivered fresh &#38; on time</p>
            </div>
        </section>
    );
}

export default Features;