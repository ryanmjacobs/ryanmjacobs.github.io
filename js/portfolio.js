/**
 * portfolio.js
 * Author: Ryan Jacobs <ryan.mjacobs@gmail.com>
 *
 * Requires jQuery for div animations.
 */

// typography joke
(function (window, document) {
    var comicSansState = false;
    var oldFont = document.body.style.fontFamily;

    document.getElementById("typography-link").onclick = function() {
        if (comicSansState = !comicSansState)
            document.body.style.fontFamily = "'Comic Sans', cursive";
        else
            document.body.style.fontFamily = oldFont;
    };

}(this, this.document));

// sliding divs
(function (window, document) {
    $(document).ready(function() {

        // true =about slide is NOT showing
        // false=about slide is showing
        var about_state = false;

        // initial arrows
        $("#left-arrow").hide();
        $("#right-arrow").show();

        $("#right-arrow").click(function() {about(true)});
        $("#left-arrow") .click(function() {about(false)});

        // do something on actual arrow keypresses
        $("body").keyup(function(e) {
            if (e.keyCode == 37) about(true);  // left arrow
            if (e.keyCode == 39) about(false); // right arrow
        });

        // give input True if currently on "about" section
        // to move to work-and-contact section
        function about(state) {

            // if the state is the same as the last
            //    one, don't do anything
            if (state === about_state) return;

            // set the old state to the new one
            about_state = state;

            if (state) {
                $("#about").animate({
                    opacity: 0
                }, 500).hide();
                $("#work-and-contact").animate({
                    opacity: 1,
                }, 500).show();

                $("#right-arrow").hide();
                $("#left-arrow").show();
            } else {
                $("#work-and-contact").animate({
                    opacity: 0,
                }, 500).hide();
                $("#about").animate({
                    opacity: 1,
                }, 500).show();

                $("#left-arrow").hide();
                $("#right-arrow").show();
            }
        };
    });
}(this, this.document));
