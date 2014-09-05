/**
 * Media slide constructor
 * @param cont
 * @param title
 * @param img
 * @param caption
 * @param text
 * @returns
 */
function MediaSlide(cont,title,img,caption,text,callback) {
    Slide.call(this,cont);
    this.html = ["<div id='slide'>",
                 "<h2>{TITLE}</h2>",
                 "<img src='{IMG}' style='max-width:100%;max-height:100%;width:auto;'></img>",
                 "<p>{CAPTION}</p>",
                 "<p>{TEXT}</p>",
                 "</div>"];
    this.title = title;
    this.img = img;
    this.caption = caption;
    this.text = text;
    this.divcallback = callback;
}
MediaSlide.prototype = Object.create(Slide.prototype);
MediaSlide.prototype.fill = function(str) {
        str = str.replace(/{TITLE}/g,this.title);
        str = str.replace(/{IMG}/g,this.img);
        str = str.replace(/{CAPTION}/g,this.caption);
        str = str.replace(/{TEXT}/g,this.text);
        return str;
    };
MediaSlide.prototype.display = function() {
        Slide.prototype.display.call(this);
        if (this.divcallback != null)
            $("#slide").click(this.divcallback);
    };