import { useState, useEffect } from "react";
import Header from "../common/header/Header";
// import { useParams } from 'react-router-dom';

const Work = (props) => {
    const [work, setWork] = useState("");
    const query= new URLSearchParams(props.location.search)
    useEffect( () => {
        console.log(props);
        console.log(query.get("key"));
        // console.log(useParams);

        setWork(props.match.params.work)
        
    }, [])
    
    return (
        <div>
            <Header selected="WORK"/>
            This is a work page releted  {work}
        </div>
    )
}
export default Work;