import React from "react";
import data from "./Data";
import { useState } from "react";
import '../styles/App.css';



const App = () => {


    let [index, setIndex] = useState(0);

    function handlePrevClick() {
        if (index == 0) {
            setIndex(3);
        } else {
            setIndex(index - 1);
        }
    }

    function hangleNextClick() {
        if (index == 3) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function handleRandomClick() {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * 4); // Generate a random number between 0 and 3
        } while (randomIndex === index); // Loop until the random index is different from the current value

        setIndex(randomIndex);
        console.log(randomIndex);
    }


    


    return (
        <div>
            <h1 id="review-heading">Our Reviews</h1>
            <div className="review">
                <div>
                    <img className="person-img" src={data[index].image}></img>
                </div>
                <div>
                    <span className="author" id={`author-${index + 1}`}>Name: {data[index].name}</span>
                    <p className="job">Job: {data[index].job}</p>           
                    <p className="info">Text: {data[index].text}</p>  
                </div>
                <div>
                <button className="prev-btn" onClick={handlePrevClick}>Previous</button>
                <button className="next-btn" onClick={hangleNextClick}>Next</button>
                <button className="random-btn" onClick={handleRandomClick}>surprise me</button>
                </div>
                
                
            </div>
        </div>
    )
}

export default App;