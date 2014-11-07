/**
 * change-face.js
 *
 * Changes faces by scrolling. Uncomment
 * that other part to change with arrow keys.
 *
 * Author: Ryan Jacobs <ryan.mjacobs@gmail.com>
 */

(function(window, document) {
    var faceIndex = 0;
    var faceImages = [
        "headshots/shot_2.png", //best?
        "headshots/shot_1.png",
        "headshots/shot_3.png",
        "headshots/shot_4.png",
        "headshots/shot_5.png"
    ];

    document.onkeydown = function(e) {
        e = e || window.event;
        // 37=left, 38=up, 39=right, 40=down
      //if (e.keyCode == '37')      changeFace("back");
      //else if (e.keyCode == '39') changeFace("forward");
    };

    window.onscroll = function() {
        changeFace("forward");
    };

    function changeFace(direction) {
        if (direction == "back") {
            if (--faceIndex < 0)
                faceIndex = faceImages.length-1;
        }
        else if (direction == "forward") {
            if (++faceIndex > faceImages.length-1)
                faceIndex = 0;
        }

        if (document.body.scrollTop == 0) faceIndex = 0;
        document.getElementById("headshot").src = faceImages[faceIndex];
    };

    /**
     * Change the font to Comic Sans this function is called.
     */
    var comicSansState = false;
    var oldFont = document.body.style.fontFamily;

    document.getElementById("typography-link").onclick = function() {
        if (comicSansState = !comicSansState)
            document.body.style.fontFamily = "'Comic Sans', cursive";
        else
            document.body.style.fontFamily = oldFont;
    };

}(this, this.document));
