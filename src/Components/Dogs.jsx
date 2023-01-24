// Api https://dog.ceo/api/breeds/image/random

import React, { useState, useEffect } from "react";

const Dogs = () => {
    const [dog, setDog] = useState("");
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setDog(data.message);
        });
    }, []);
    
    useEffect(() => {
        document.title = "Dog";
    });
    
    return (
        <div>
        <img src={dog} alt="Random Dog" />
        {/* add a button */}
        <button onClick={() => window.location.reload(false)}>New Dog</button>
        
        </div>
    );
    }

export default Dogs;