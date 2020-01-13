import React from "react";
import { Switch, Route, } from "react-router-dom";
// Pages
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Products from "./components/Products";


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/products" component={Products} />        
    </Switch>
)