var invert = require('invert-obj');

function RelativeValueSide (relativeValueSide) {
  this.message = relativeValueSide;
}

RelativeValueSide.prototype.value = function () {
  return this.message;
};


RelativeValueSide.Keys = {
  BID: '1',
  MID: '2',
  OFFER: '3',
};

RelativeValueSide.Tag = '2532';

RelativeValueSide.Type = 'INT';

RelativeValueSide.Values = invert(RelativeValueSide.Keys);

module.exports = RelativeValueSide;