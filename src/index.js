import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, Now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());