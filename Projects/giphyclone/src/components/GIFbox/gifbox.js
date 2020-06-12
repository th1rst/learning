import React from 'react';



class Gifbox extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      default: null,
    };
  }


  createGifboxes() {
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
    }


    let finalDiv = []

    for (let i = 0; i < 100; i++) {
      finalDiv.push(
        <div style={GifboxStyle} key={`gifboxOuterDiv${i}`}>
          <a href={this.state.data.data[i].images.fixed_height_downsampled.url} target="_blank" rel="noopener noreferrer">
            <img style={ImgStyle}
              src={this.state.data.data[i].images.fixed_height_downsampled.url} 
              key={`gifboxInnerGif${i}`} 
              alt={this.state.data.data[i].title}
            />
          </a>
        </div>)
    }
    return finalDiv
  }
  
 

  componentDidMount() {
    this.loadData();
  }


  loadData() {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=100&rating=G`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  render() {
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

    /*
    console.log(this.state.data.data)
    console.log(this.state.data.data.length)
    */
    return (
      <div id="gifContainerDiv" style={GifOuterContainerStyle}>
        {this.createGifboxes()}
      </div>
    );
  }
}

export default Gifbox