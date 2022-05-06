import React from "react";
import { ReactDOM } from "react";
import App from "./App";

it ("Renders Without Crushing", () =>{
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
  })

