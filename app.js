const heading = React.createElement("h1",{ id : "heading"},"hello world from react!");
// {} inside we can give attributes
const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(heading);


/**
 * nested elements
 * <div id ="parent">
 *    <div id="child">
 *        <h1> hi </h1>
 *             <h2> hi2 </h2>  // for syblings use [] array ie same level
 *   </div>
 * </div>
 * 
 * 
 * ReactElement(onject )===> HTML(BROWSER understands)
 */

const parent = React.createElement("div",{id:"parent"},
              React.createElement("div",{id:"child"},
             [React.createElement("h1", {}, "hi "),React.createElement("h2",{},"hi2")]));

             root.render(parent);


