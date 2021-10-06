import React from "react";
import Footer from "./components/footer/footer";
import NavBar from "./components/Navbar/Navbar";
import AboutMe from "./components/about/about";
import Work from "./components/work/work";
import ContactMe from "./components/contact/contact";
import Hero from "./components/hero";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>

        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/contact-me">
          <ContactMe />
        </Route>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
