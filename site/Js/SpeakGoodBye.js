(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "GoodBye ";
  johnGreeter.sayGoodBye = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);

(function (window) {
  var jenGreeter = {};
  jenGreeter.name = "Jen";
  var greeting = "GoodBye ";
  jenGreeter.sayGoodBye = function () {
    console.log(greeting + jenGreeter.name);
  }

  window.jenGreeter = jenGreeter;

})(window);

(function (window) {
  var jasonGreeter = {};
  jasonGreeter.name = "Jason";
  var greeting = "GoodBye ";
  jasonGreeter.sayGoodBye = function () {
    console.log(greeting + jasonGreeter.name);
  }

  window.jasonGreeter = jasonGreeter;

})(window);

(function (window) {
  var jimGreeter = {};
  jimGreeter.name = "Jim";
  var greeting = "GoodBye ";
  jimGreeter.sayGoodBye = function () {
    console.log(greeting + jimGreeter.name);
  }

  window.jimGreeter = jimGreeter;

})(window);