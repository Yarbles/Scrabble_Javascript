var scrabbleScore = function(input) {
    var score = [];
    // var input_split = [];

    var input_split = input.split("");

    // var letters = input_split.push(split_it);

    var one = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    var two = ["D", "G"];

    var tally = 0;
    var final_score = 0;

    for (var i=0; i< input_split.length; i++) {
        if($.inArray(input_split[i], one) !== -1) {
            tally++;
            score.push(tally);
            tally = 0;
        }
        $.each(score,function() {
            final_score += this;
        });
    }
    return final_score;
};
