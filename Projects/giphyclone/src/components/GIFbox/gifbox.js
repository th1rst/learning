import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';


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
      width: "85%",
      height: "100%",
      margin: "0 auto",
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",

    };

    const TestStyle = {
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



    if (!this.state.data) {
        return <div />;
    }

    
    console.log(this.state.data.data)
    console.log(this.state.data.data.length)
    
    return (
      <div style={GifOuterContainerStyle}>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[0].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[1].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[2].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[3].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[4].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[5].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[6].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[7].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[8].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[9].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[10].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[11].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[12].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[13].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[14].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[15].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[16].images.fixed_height_downsampled.url} alt="asdffff"/>
        </div>
        <div style={TestStyle}>
            <img style={ImgStyle} src={this.state.data.data[17].images.fixed_height_downsampled.url} alt="asdffff"/> 
        </div>
      </div>
    );
  }
}





export default Gifbox