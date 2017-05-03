import _ from 'lodash';
import $ from 'jquery';

function component(){

    var element = $('<div></div>');
    // var element = document.createElement('div');
    // element.innerHTML = _.join(['hello','webpack'],' ');
    element.html(_.join(['hello','webpack'],' '))
    // return element;
    return element.get(0);
}

document.body.appendChild(component());

// console.log("harrisking");
