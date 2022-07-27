// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.timeBetween = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

  // return dancer;
};

MakeDancer.prototype.step = function() {
  console.log(this);
  // setTimeout(function() {
  //   debugger;
  //   this.step();
  // }, this.timeBetween);
  setTimeout(this.step.bind(this), this.timeBetween);

};


MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};