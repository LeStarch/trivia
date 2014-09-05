/**
 * ctor for "Slide" object.
 * cont - jquery result, container to draw slide into. 
 */
function Slide(cont) {
    this.container = cont;
    this.html = ["<div>Uh-Oh your developer is an idiot. This is supposed to be an abstract class...</div>"];
};

/**
 * Add prototype functions. All objects that are "slides"
 * will inherit this.
 */
Slide.prototype.display = function() {
    var disp = "";
    for (var i = 0; i < this.html.length; i++)
        disp += this.fill(this.html[i]);
    this.container.html(disp);
};
/**
 * Base fill function does nothing.
 * @param str - to fill
 * @returns same string
 */
Slide.prototype.fill = function(str) {return str;};
