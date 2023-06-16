(function (window){ //immediately invoked function expression; window object
    var speakWord = "Hello";
    var helloSpeaker = {};

    helloSpeaker.speak = function(name){ //.speak means that speak function is attached to helloSpeaker (no need to write it separately in addition)
        console.log(speakWord + " " + name); //console outputs "Hello"+(space)+(name), ex. Hello John
    }

    window.helloSpeaker = helloSpeaker; //helloSpeaker attached to window
})(window);
