import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import "./css/main.css";


const path = document.getElementById("app")
const app = ReactDOMClient.createRoot(path)

app.render(<App />)
