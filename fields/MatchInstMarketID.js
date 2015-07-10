var invert = require('invert-obj');

function MatchInstMarketID (matchInstMarketId) {
  this.message = matchInstMarketId;
}

MatchInstMarketID.prototype.value = function () {
  return this.message;
};

MatchInstMarketID.Tag = '1673';

MatchInstMarketID.Type = 'EXCHANGE';

module.exports = MatchInstMarketID;