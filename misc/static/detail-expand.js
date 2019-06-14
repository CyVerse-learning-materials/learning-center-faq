/*jslint browser: true */
(function ($) {
    "use strict";

    function highlight(selector) {
        $(selector).effect("highlight", {}, 2000);
    }

    function initToggleexpands() {
        var expandTitles = $(".admonition-expand-to-read-more-to-read-more .admonition-title");

        $(".admonition-title ~ *", ".admonition-expand-to-read-more").toggle();
        expandTitles.toggleClass("expanded");

        expandTitles.on("click", function (event) {
            var title = $(event.target),
                content = $(".admonition-title ~ *", title.parent());

            title.toggleClass("expanded");
            content.slideToggle();
        });
    }

    function initHighlightAnchoredSection() {
        if (document.location.hash !== "") {
            highlight(document.location.hash);
        }

        $('.rst-content a[href*="#"]').click(function () {
            highlight($(this).attr("href"));
        });
    }

    $(document).ready(function () {
        initToggleexpands();
        initHighlightAnchoredSection();
    });
}(window.jQuery));
