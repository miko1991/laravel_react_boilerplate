require('../bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import Index from "./Index";
ReactDOM.render(<BrowserRouter basename='admin'><Index /></BrowserRouter>, document.getElementById('app'))
