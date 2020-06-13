import React from "react";
import "./App.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-roboto";

class Main extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.state = {
      data: null,
      userQuery: null,
    };
  }

  handleTextChange = async function() {
    let userInput = this.textInput.current.value;
    await this.setState({userQuery: userInput})
    //console.log(this.state.userQuery); 
  }

  createGifBoxes() {
    const GifboxStyle = {
      border: "4px double rgba(108,129,164,0.18)",
      borderRadius: "4px 24px 0px 24px",
      boxShadow: "3px 4px 13px -1px rgba(0,0,0,0.75)",
      width: "15rem",
      height: "13rem",
      margin: "0.8rem 0.6rem",
      overflow: "hidden",
    };

    /*some images get a little distorted but, in general, it still looks better 
    than having differently sized boxes (fit to individual image height/width) */
    const ImgStyle = {
      width: "100%",
      height: "100%",
    };
    
    let finalDiv = [];
    
    for (let i = 0; i < this.state.data.data.length; i++) {
      finalDiv.push(
        <div style={GifboxStyle} key={`gifboxOuterDiv${i}`}>
          <a
            href={this.state.data.data[i].images.downsized.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={ImgStyle}
              src={this.state.data.data[i].images.fixed_height_downsampled.url}
              key={`gifboxInnerGif${i}`}
              alt={this.state.data.data[i].title}
              title={this.state.data.data[i].title}
            />
          </a>
        </div>
      )
    }
    return finalDiv;
  }

  componentDidMount() {
    this.loadTrendingData();
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.userQuery !== this.state.userQuery) {
          this.loadSearchResults(this.state.userQuery)
      } else if (this.state.userQuery === "") { //if user has made an input and then deleted it, make it go back to "Trending"
        this.loadTrendingData()
      }
  }

  loadTrendingData() {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=50&rating=G`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  loadSearchResults(inputQuery) {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputQuery}&limit=50&offset=0&rating=G&lang=en `)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  render() {
    /* STYLE */
    const NavStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    const HeadingStyles = {
      display: "flex",
      justifyContent: "center",
      color: "#313438",
      marginTop: "5rem",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "3em",
      letterSpacing: "-2px",
    };

    const GifOuterContainerStyle = {
      display: "flex",
      flex: "1",
      width: "85%",
      height: "100%",
      margin: "0 auto",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    };

    if (!this.state.data) {
      return <div />;
    }
    return (
      <div>
        <Navbar fixed="top" bg="dark" style={NavStyle}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form inline>
            <FormControl
              style={{ width: "40vw" }}
              type="text"
              placeholder="Search for GIF's"
              className="mr-sm-3 mr-4"
              aria-label="large"
              ref={this.textInput}
              onChange={() => this.handleTextChange()}
            />
          </Form>
        </Navbar>

        <div className="heading">
          <h1 style={HeadingStyles}>{this.state.userQuery ? `Your search results for ${this.state.userQuery}:` : "#TRENDING"}</h1>
        </div>

        <div id="gifContainerDiv" style={GifOuterContainerStyle}>
          {this.createGifBoxes()}
        </div>
      </div>
    );
  }
}

export default Main;
