import React from "react";
import "./Main.css";

export default function Main(){
    return(
        <main>
           <div className="left-section">
                <nav>
                    <ul>
                        <li>Notes</li>
                        <li>Reminders</li>
                        <li>Archive</li>
                        <li>Trash</li>
                    </ul>
                </nav>
           </div>
           <div className="right-section">
                <p>Hello</p>
           </div>
        </main>
    );
}