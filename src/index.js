import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import "./index.css";

const date = new Date();
const hr = date.getHours();
const obj = {};
let greeting = '';
if(hr>=1 && hr<=12){
    greeting = 'Good Morning';
    obj.color='green';
}else if(hr>=12 && hr<=19){
    greeting = 'Good Afternoon';
    obj.color='orange';
}else{
    greeting = 'Good Evening';
    obj.color='blue';
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><div className="cdiv">
                <h1>Hello sir, <span style={obj}>{greeting}</span></h1>
                </div>
              </>);
