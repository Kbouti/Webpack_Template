import _ from 'lodash';

import './style.css'

import { boardLogicReportToDom,
boardLogicReportToConsole } from './boardLogic';

function component() {
    const element = document.createElement('div');
    // Lodash, Now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add(`hello`);
    return element;
  }

  document.body.appendChild(component());

  boardLogicReportToDom();
  boardLogicReportToConsole();


  // Fantastic wepack tutorial: https://www.youtube.com/watch?v=IZGNcSuwBZs