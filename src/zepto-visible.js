$.fn.visible = function (visibility) {
    return this.each(function (index, item) {
        var zEl = $(this);
        zEl.css("visibility", visibility ? "" : "hidden");
    });
}