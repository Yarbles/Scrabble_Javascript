var scrabbleScore = function(input) {
    var score = [];
    var input_split = input.split("");
    console.log(input_split);

    var one = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    var two = ["D", "G"];

    var tally = 0;
    console.log(tally);

    var final_score = 0;

    for (var i=0; i< input_split.length; i++) {
        if($.inArray(input_split[i], one) !== -1) {
            tally++;
            console.log(tally);
            score.push(tally);
            tally = 0;
            console.log(tally);
        }
    }
    $.each(score,function() {
        final_score += this;
        console.log(final_score);
    });
    return final_score;
};
