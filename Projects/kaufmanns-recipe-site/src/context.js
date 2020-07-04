import React, { Component } from "react";

const RecipesContext = React.createContext();

export default class RecipesProvider extends Component {
  state = {
    apiData: [],
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
      .getEntries({ content_type: "recipe" })
      .then((entry) => {
        this.setState({ apiData: entry, fetched: true });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <RecipesContext.Provider value={{ ...this.state }}>
        {console.log(this.state.apiData)}
        {this.props.children}
      </RecipesContext.Provider>
    );
  }
}

const RecipesConsumer = RecipesContext.Consumer;

export { RecipesProvider, RecipesConsumer, RecipesContext };
