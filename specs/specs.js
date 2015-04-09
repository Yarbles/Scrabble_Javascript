describe('scrabbleScore', function() {
    it("will return a score of 1 when A is inputted", function() {
     expect(scrabbleScore("A")).to.equal(1);
    });

    it("returns a score of 2 when two letters worth 1 pt each are inputted", function() {
        expect(scrabbleScore("AT")).to.equal(2);
    });
});
