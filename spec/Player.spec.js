var generatePlayersforTesting =require('../utils/generatePlayersforTesting.js');
var tournamentBusiness=require('../app/tournamentBusiness.js');
describe('add 7 players', function() {
    it('should add 7 players and return error of less players than required', function() {
      generatePlayersforTesting.generatePlayersIncreasingRankwithN(7);
      var validationResult=validateNumberofPlayers(tournamentBusiness.getListofPlayers().length);
      expect(validationResult.error.lessthanrequired).toEqual(true);
    });
});
