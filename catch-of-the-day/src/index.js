//Ojo con ese react en minúscula
import React from 'react';
import {render} from 'react-dom';
import Router from './components/Router';
import "./css/style.css";

render(<Router />,document.querySelector('#main'));