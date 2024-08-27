import React from 'react'; // Ensure this line is present
import "./Loading.css";

export default function Loading() {
    return (
        <div className="text-center">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
}
