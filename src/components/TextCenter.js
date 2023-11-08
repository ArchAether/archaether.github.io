import React from "react";

export default function TextCenter() {
    return (
        <div>
            <div className="row " style={{ border: "1px solid black" }}>
                <div className="col" style={{ border: "1px solid black" }}>
                    <span className="align-middle" style={{ border: "1px solid black" }}>middle</span>

                </div>
                <div className="col" style={{ border: "1px solid black" }}>
                    <img src="https://projectpokemon.org/images/sprites-models/sv-sprites-home/1008_01.png" style={{ border: "1px solid black" }}></img>
                </div>
                <div className="col" style={{ border: "1px solid black" }}>
                    <span className="align-baseline" style={{ border: "1px solid black" }}>baseline</span>
                    <span className="align-top" style={{ border: "1px solid black" }}>top</span>
                    <span className="align-middle" style={{ border: "1px solid black" }}>middle</span>
                    <span className="align-bottom" style={{ border: "1px solid black" }}>bottom</span>
                    <span className="align-text-top" style={{ border: "1px solid black" }}>text-top</span>
                    <span className="align-text-bottom" style={{ border: "1px solid black" }}>text-bottom</span>
                    <img src="https://projectpokemon.org/images/sprites-models/sv-sprites-home/1008_01.png" style={{ border: "1px solid black" }}></img>
                </div>
            </div>

            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{ border: "1px solid black" }}>
                        <p className="" style={{border: "3px solid green" }}><span className="align-bottom" style={{ border: "3px solid red", width: "100px", height: "100px"}}>Text</span></p>
                </div>
                <div className="col" style={{ border: "1px solid black" }}>
                    <img src="/logo512.png"
                        style={{ border: "1px solid black", maxWidth: "100px", maxHeight: "100px" }}></img>
                </div>
            </div>
            <div className="d-flex align-items-center" style={{width: "500px", height: "500px", border: '2px solid black' }}>
                <div className="" style={{width: "200px", height: "200px", border: '2px solid green' }}>

                </div>
            </div>
        </div>
    )
}