import React from "react";
import ReactDOM from "react-dom";
import Client from "@searchkit/instantsearch-client";
import Searchkit from "searchkit";
import { InstantSearch, SearchBox, Hits, RefinementList } from "react-instantsearch";
 
// Create a Searchkit client
// This is the configuration for Searchkit, specifying the fields to attributes used for search, facets, etc.
const sk = new Searchkit({
  connection: {
    host: "http://localhost:9200",
    // cloud_id: "my-cloud-id" // if using Elastic Cloud
    // if you're authenticating with username/password
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-usernamepassword
    //auth: {
    //  username: "elastic",
    //  password: "changeme"
    //},
    // if you're authenticating with api key
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
    // apiKey: "######"
  },
  search_settings: {
    search_attributes: ['name'],
    result_attributes: ['name', 'description']
  },
})
 
const searchClient = Client(sk);
 
const App = () => (
  <InstantSearch indexName="products" searchClient={searchClient}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);


 
export default App;