import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='home-wrapper'>
            <h1 id="fortune-holder" class="fade-animation">What is your fortune?</h1>
        {/* <div className="home-buttons-wrapper"> */}

           <Link to="fortunes"> <button onClick="getFortune()">Get Fortune</button></Link>
                <Link to="/add-item"><button onClick="getFortune()">Add Fortune</button></Link>
             </div>
        // </div>
    )
}