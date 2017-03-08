/**
 * Created by Administrator on 2016/4/11.
 */

;(function ($) {
    $.fn.extend({
        placeholder : function () {
            if ("placeholder" in document.createElement("input")) {
                return this //���ԭ��֧��placeholder���ԣ��򷵻ض�����
            } else {
                return this.each(function () {
                    var _this = $(this);
                    _this.val(_this.attr("placeholder")).focus(function () {
                        if (_this.val() === _this.attr("placeholder")) {
                            _this.val("")
                        }
                    }).blur(function () {
                        if (_this.val().length === 0) {
                            _this.val(_this.attr("placeholder"))
                        }
                    })
                })
            }
        }
    })
})(jQuery);