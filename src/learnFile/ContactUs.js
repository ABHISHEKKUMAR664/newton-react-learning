import React from 'react';
import { useState,useEffect} from 'react';

const ContactUs = ({ initialNoOfVisitor, dummpyProps }) => {
    const [noOfVisitors, setNoOfVisitors] = useState(0)
    

    useEffect(() =>{
        console.log("Initial No of Props", initialNoOfVisitor)
    }, [initialNoOfVisitor])

    useEffect(() => {
        console.log("Dummy Props",dummpyProps)
    }, [dummpyProps])
    
    return (
        <div>
            {console.log("hgfj")}
            <h1>This is Contact Us Page</h1>
            <h2>we are going to learn lifeCycle in fuctional component</h2>
            <h3>welcome to contactUs page</h3>
            <label>No of Visitors:</label>
            <p>{noOfVisitors}</p>
            <button onClick={() => setNoOfVisitors(noOfVisitors+10)}>change::state</button>
        </div>
    )
}
export default ContactUs;