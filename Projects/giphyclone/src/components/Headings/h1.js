import React from 'react'
import "typeface-roboto"

class Heading extends React.Component{
     render() {

        const HeadingStyles = {
            display: "flex",
            justifyContent: "center",
            color: "#313438",
            marginTop: "5rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "3em",
        }
        

        return (
            <div className="heading">   
            <h1 style={HeadingStyles}>#TRENDING</h1>
            </div>
        )
    }

}

export default Heading