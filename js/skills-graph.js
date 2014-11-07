/**
 * skills-graph.js
 * Author: Ryan Jacobs <ryan.mjacobs@gmail.com>
 */

(function (window, document) {
    var skills = {
        /* Dev Skills */
        "C":            9.3,
        "C++":          2.5,
        "Haskell":      2,
        "English":      8.5, //hehe
        "Lua":          7,
        "Python":       7.5,
        "Ruby":         5,
        "BASH":         10,
        "JavaScript":   7,
        "CoffeeScript": 6,
        "HTML":         8,
        "CSS":          7,
        "SASS":         8,

        /* Design Skills */
      //"Photoshop":     8,
      //"Illustrator":   4,
      //"Premiere":      8,
      //"After Effects": 6
    };

    function skillsToData(obj) {
        var data = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                data.push(obj[key]);
            }
        }
        return data;
    }

    var labels = Object.keys(skills);
    var skillsData = skillsToData(skills);

    var data = {
        labels: labels,
        datasets: [
            {
                fillColor:       "rgba(255, 15, 15, 0.5)",
                strokeColor:     "rgba(255, 15, 15, 0.8)",
                highlightFill:   "rgba(255, 15, 15, 0.65)",
                highlightStroke: "rgba(255, 15, 15, 0.9)",
                data: skillsData
            },
        ]
    };

    var ctx   = document.getElementById("skills-graph").getContext("2d");
    var chart = new Chart(ctx).Bar(data, {responsive: true});
}(this, this.document));
