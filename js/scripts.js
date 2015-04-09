var scrabbleScore = function(input) {
    var score = [];
    var input_split = input.toUpperCase().split("");

    var one = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    var two = ["D", "G"];
    var three = ["B", "C", "M", "P"];
    var four = ["F", "H", "V", "W", "Y"];
    var five = ["K"];
    var eight = ["J", "X"];
    var ten = ["Q", "Z"];

    var tally = 0;
    var final_score = 0;

    for (var i=0; i< input_split.length; i++) {
        if($.inArray(input_split[i], one) !== -1) {
            tally++;
            score.push(tally);
            tally = 0;
        } else if($.inArray(input_split[i], two) !== -1) {
            tally+=2;
            score.push(tally);
            tally = 0;
        } else if($.inArray(input_split[i], three) !== -1) {
            tally+=3;
            score.push(tally);
            tally = 0;
        }else if($.inArray(input_split[i], four) !== -1) {
            tally+=4;
            score.push(tally);
            tally = 0;
        }else if($.inArray(input_split[i], five) !== -1) {
            tally+=5;
            score.push(tally);
            tally = 0;
        }else if($.inArray(input_split[i], eight) !== -1) {
            tally+=8;
            score.push(tally);
            tally = 0;
        }else if($.inArray(input_split[i], ten) !== -1) {
            tally+=10;
            score.push(tally);
            tally = 0;
        };
    }

    $.each(score,function() {
        final_score += this;
    });
    return final_score;
};


$(document).ready(function() {
    $("form#scrabble-score").submit(function(event) {
        var user_input = $("input#word").val();
        var result = scrabbleScore(user_input);

    $(".score").text(result);
    $("#result").show();

    event.preventDefault();
    });
});
