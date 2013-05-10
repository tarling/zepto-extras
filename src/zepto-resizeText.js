$.fn.resizeText = function (value) {

    return this.each(function (index, item) {
        var zEl = $(this);

        var current = zEl.html();

        //don't bother if the text we're setting is the same as the current contents
        if (value == current) return;

        //set the content so we get something for the height
        zEl.html("&nbsp;");
        
        //remove any previous font-size from style attribute
        zEl.css("font-size", "");


        var w = zEl.width();
        var h = zEl.height();
        
        var fontStr = zEl.css("font-size");
        var fontNumStr = fontStr.replace(/[a-z ]/gi, "");
        var fontSize = parseFloat(fontNumStr);

        var fontSuffix = fontStr.split(fontNumStr).join("");
          
        //console.log(["w", w, "h", h, "fontStr", fontStr, "fontNumStr", fontNumStr, "fontSize", fontSize, "fontSuffix", fontSuffix].join(":"));

        
        zEl.html(value);
        do {
            zEl.css("font-size", fontSize + fontSuffix);
            fontSize -= .5;
        } while ((zEl.width() > w || zEl.height() > h) && fontSize > 0);


    });
}