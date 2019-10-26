import React from "react";
// React-dom é integração do react com a arvore de elementos (dom)
import { render } from "react-dom";
//
import App from "./App";

// Renderizar o codigo react, dentro de algum conteudo do html.
render(<App />, document.getElementById("app"));
