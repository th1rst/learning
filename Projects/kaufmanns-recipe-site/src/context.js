import React, { Component } from "react";

const RecipesContext = React.createContext();

export default class RecipesProvider extends Component {
  state = {
    recipes: [],
    fetched: false,
  };

  componentDidMount() {
    const contentful = require("contentful");
    const API_KEY = process.env.REACT_APP_CONTENTFUL_RECIPE_API_KEY;
    const client = contentful.createClient({
      space: "9eq7letzz02f",
      accessToken: `${API_KEY}`,
    });
    client
      .getEntries({ limit: 200, content_type: "recipe" })
      .then((entry) => {
        this.setState({ recipes: this.formatData(entry), fetched: true, });
      })
      .catch((err) => console.log(err));
  }

  formatData(entry) {
    let tempItems = entry.items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)
      let recipe = {...item.fields, images, id}
      return recipe
    })
    return tempItems
  }

  render() {
    return (
      <RecipesContext.Provider value={{ ...this.state }}>
        {/*console.log(this.state.recipes)*/}
        {this.props.children}
      </RecipesContext.Provider>
    );
  }
}

const RecipesConsumer = RecipesContext.Consumer;

export { RecipesProvider, RecipesConsumer, RecipesContext };
