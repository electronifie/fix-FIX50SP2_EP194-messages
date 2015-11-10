var invert = require('invert-obj');

function MatchInst (matchInst) {
  this.message = matchInst;
}

MatchInst.prototype.value = function () {
  return this.message;
};


MatchInst.Keys = {
  'MATCH': '1',
  'DO_NOT_MATCH': '2',
};

MatchInst.Tag = '1625';

MatchInst.Type = 'INT';

MatchInst.Values = invert(MatchInst.Keys);

module.exports = MatchInst;