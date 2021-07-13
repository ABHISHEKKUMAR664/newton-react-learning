import React from 'react';

const Pricing = (props) => {
    return (
        <div className="pricingPage">
            <h1 style={{ color: 'yellow' }}>This is Pricing Page</h1>
            <h2>Welcome to the Pricing Page</h2>
            <p>Learning is expesive</p>
            <button onClick={props.goBackToHomePage}>Go back to HomePage</button>

        </div>
    )
}
export default Pricing;