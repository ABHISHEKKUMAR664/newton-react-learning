import React from 'react'

const Home = ({ changeToPricingPage }) => {
    return (
        <div className="Home">
            <h1 style={{ color : 'red'}}>This is our Home Page</h1>
            {/* <button>HomePage </button> */}

            <h2>Welcome to home Page</h2>
            <button onClick={changeToPricingPage}>Go to PricingPage</button>
        </div>

    )
}
export default Home;