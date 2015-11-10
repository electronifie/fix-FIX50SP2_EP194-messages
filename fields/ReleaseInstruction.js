var invert = require('invert-obj');

function ReleaseInstruction (releaseInstruction) {
  this.message = releaseInstruction;
}

ReleaseInstruction.prototype.value = function () {
  return this.message;
};


ReleaseInstruction.Keys = {
  'INTERMARKET_SWEEP_ORDER': '1',
  'NO_AWAY_MARKET_BETTER_CHECK': '2',
};

ReleaseInstruction.Tag = '1810';

ReleaseInstruction.Type = 'INT';

ReleaseInstruction.Values = invert(ReleaseInstruction.Keys);

module.exports = ReleaseInstruction;