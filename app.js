import React from "react";
import ReactDOM from "react-DOM/client";

const heading = React.createElement("h1",{ id : "heading"},"hello world from react!");
// {} inside we can give attributes
const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(heading);


const parent = React.createElement("div",{id:"parent"},
              React.createElement("div",{id:"child"},
             [React.createElement("h1", {}, "yo "),React.createElement("h2",{},"hi2")]));

             root.render(parent);


