import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Practice from "./components/Practice/Practice";
import Contacts from "./components/Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/services" component={Services} />
                    <Route path="/practice" component={Practice} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/" component={Home} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
