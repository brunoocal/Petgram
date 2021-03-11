import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//APP
import App from "./App";
import Context from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-bruno.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
