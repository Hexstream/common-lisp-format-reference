"use strict";

function sync (tracking, tracked) {
    tracking.setAttribute("style", "top: " + tracked.y + "; height: " + tracked.height + "px;");
    tracking.style.top = tracked.y;
    tracking.style.height = tracked.height;
}

function init () {

    var recursive_elements = document.getElementsByClassName("recursive");

    for (var i = 0; i < recursive_elements.length; i++) {
        var element = recursive_elements[i];
        var semicircle = document.createElement("div");
        semicircle.className="grouping-semicircle";
        // element.appendChild(semicircle);
        // Todo: scroll event listener
        sync(semicircle, element);
    }
}
