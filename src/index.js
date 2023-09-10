import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataStore from "./contextApi"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  split,
  ApolloProvider,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "@apollo/client/link/ws";

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const wsLink = new WebSocketLink({
  uri: "wss:localhost:4000/graphql",
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([splitLink]),
});

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <DataStore>
   <ApolloProvider client={client}>
      <Provider template={AlertTemplate} {...options}>
        <App />
      </Provider>
    </ApolloProvider>
   </DataStore>
  </React.StrictMode>
);

reportWebVitals();
