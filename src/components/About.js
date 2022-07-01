import React from 'react'

export default function About(props) {
    let Mystyle = {
        color : props.mode==="dark"?"white":"#000000c7",
        backgroundColor : props.mode==="dark"?"#000000c7":"white" 
    };
    return (
        <div className="container my-3" style={{color : props.mode==="dark"?"white":"#000000c7"}}>
            <div className="container my-3" >
                <h3>About Us</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne" >
                            <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={Mystyle}>
                                <strong>Analyse Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={Mystyle}>
                                You can drop your text in the textbox to perform certain operations on the text thus modifying it.    
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={Mystyle}>
                                <strong>Use Of Buttons</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={Mystyle}>
                                Make use of the buttons to easily transform the text in the textbox. This is a very useful feature of a text editors and we know how it should be provided.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={Mystyle}>
                                <strong>Different Modes</strong> 
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={Mystyle}>
                                Use of dark mode can be done in suitable environment for more user friendly experiences.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
