// Select elements by testing each value of each element's attribute `attr` for `pattern`.
(function($) {
  $.fn.hasAttrLike = function(attr, pattern) {
    return this.filter(function(idx) {
      var elAttr = $(this).attr(attr);
      if(!elAttr) return false;
      var values = elAttr.split(/\s/);
      var hasAttrLike = false;
      $.each(values, function(idx, value) {
        if(pattern.test(value)) {
          hasAttrLike = true;
          return false;
        }
        return true;
      });
      return hasAttrLike;
    });
  };
}(jQuery));
