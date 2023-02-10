import React from "react";
import h1 from './img/Ellipse.png'
export default function Header() {
    return (
        <div className="header">
            <hr class="line-3"></hr>
            <p class="back">Back</p>
            <hr class="hr"></hr>
            <img src={h1} alt="" class="ellipse"></img>
            <p class="pattie">Pattle Trusdale</p>
            <p class="Full-stack">Full-stack Developer</p>
            <button class="hire">HIRE</button>
        </div>
    )
}