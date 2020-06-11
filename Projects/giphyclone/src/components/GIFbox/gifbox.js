import React from 'react'


class Gifbox extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=G`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  render() {
    const GifOuterContainerStyle = {
      display: "flex",
      flex: "1",
      width: "80%",
      margin: "10rem auto",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      border: "1px solid green",
    };

    const TestStyle = {
      border: "1px solid black",
      borderRadius: "4px",
      width: "13rem",
      height: "13rem",
      margin: "0.7rem 0.7rem",
    };


    if (!this.state.data) {
        return <div />;
    }
    
    return (
      <div style={GifOuterContainerStyle}>
        <div style={TestStyle}>
            <img src={this.state.data.data[0].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[1].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[2].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[3].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[4].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[5].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[6].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[7].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[8].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[9].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[10].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img src={this.state.data.data[11].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
      </div>
    );
  }
}







export default Gifbox