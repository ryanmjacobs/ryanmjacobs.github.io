/**
 * typography-joke.js
 * Author: Ryan Jacobs <ryan.mjacobs@gmail.com>
 */

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
