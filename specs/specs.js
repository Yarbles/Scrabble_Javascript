describe('scrabbleScore', function() {
    it("will return a score of 1 when A is inputted", function() {
     expect(scrabbleScore("A")).to.equal(1);
    });

    it("returns a score of 2 when two letters worth 1 pt each are inputted", function() {
        expect(scrabbleScore("AT")).to.equal(2);
    });

    it("returns a score of 3 then a word with one 2-point letter and 1 1-point letter is inputted", function() {
        expect(scrabbleScore("DO")).to.equal(3);
    });

    it("returns a score of 4 when a word with one 3-point letter and 1 1-point letter is inputted", function() {
        expect(scrabbleScore("BE")).to.equal(4);
    });

    it("returns a score of 5 when a word with one 4-point letter and 1 1-point letter is inputted", function() {
        expect(scrabbleScore("HE")).to.equal(5);
    });

    it("returns a score of 29 when a 8-pt, 1-pt, and 2 10-pt letters are inputted in lowercase", function() {
        expect(scrabbleScore("jazz")).to.equal(29);
    });

});
