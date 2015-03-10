(function(){
    var xGetterSetter = Idea.Util.uintGetterSetter("x");
    var yGetterSetter = Idea.Util.uintGetterSetter("y");
    var widthGetterSetter = Idea.Util.uintGetterSetter("width");
    var heightGetterSetter = Idea.Util.uintGetterSetter("height");
    var rxGetterSetter = Idea.Util.uintGetterSetter("rx");
    var ryGetterSetter = Idea.Util.uintGetterSetter("ry");


    /*
     * Simple rectangle with content and/or with rounded corners.
     *
     * @param father       Util.Widget, parental to Rectangle, or Util.Canvas,
     *                     if Rectangle doesn't have a parent and is drawn right
     *                     on the canvas.
     * @param x            x coordinate of top-left corner of the rectangle
     * @param y            y coordinate of top-left corner of the rectangle
     * @param width        width of the rectangle
     * @param height       height of the rectangle
     * @param rx           x-axis radius of corners
     * @param ry           y-axis radius of corners
     * @param stroke       set of stroke attributes.
     * @param fill         set of fill attributes.
     * @param content
     */
    var Rectangle = function(slide, father, width, height, rx, ry) { //, stroke, fill, content){
        //if (x === undefined) {throw new Error("x not specified!");}
        //if (y === undefined) {throw new Error("y not specified!");}
        if (width === undefined) {throw new Error("width not specified");}
        if (height === undefined) {throw new Error("height not specified");}
        if (rx === undefined) {rxGetterSetter.call(this, 0);}
        if (ry === undefined) {ryGetterSetter.call(this, 0);}
        //draw primitives
        this.father = father;
        if (this.father instanceof Idea.prototype.Canvas.fn.constructor) {
            this._group = Idea.Util.createSVGElement(this.father._canvas, 'g', {});
            this._drawing = Idea.Util.createSVGElement(this._group, 'rect', {
                "x1": this._base.x,
                "y1": this._base.y,
                "x2": this._tip.x,
                "y2": this._tip.y
            });
            //this._drawing.style.stroke = this._color;
            //this._drawing.style['stroke-width'] = this.width;
        }
        else {
            //TODO!!!!
        }

    };

    Rectangle.prototype = {
        constructor: Rectangle
    };


    Object.defineProperty(Idea.prototype.Slide.fn, "Rectangle", {
        get: function(){
            var binded_rectangle = Rectangle.bind(null, this);
            binded_rectangle.fn = Rectangle.prototype;
            binded_rectangle.cons = Rectangle;
            return binded_rectangle;
        }
    });

    Idea.Util.extend(Rectangle, Idea.prototype.Slide.fn.Widget);
    Idea.Util.addAttrsToPrototype(Idea.prototype.Slide.fn.Arrow, {
        x: xGetterSetter,
        y: yGetterSetter,
        width: widthGetterSetter,
        height: heightGetterSetter,
        rx: rxGetterSetter,
        ry: ryGetterSetter,
    });
})();