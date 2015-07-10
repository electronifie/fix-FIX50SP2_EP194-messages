var NoRelativeValues = require('../fields/NoRelativeValues');
var RelativeValueType = require('../fields/RelativeValueType');
var RelativeValue = require('../fields/RelativeValue');
var RelativeValueSide = require('../fields/RelativeValueSide');

function RelativeValueGrp (relativeValueGrp) {
  this.message = relativeValueGrp;
}

/* group */

/* field */
RelativeValueGrp.prototype.relativeValueType = function () {
  return new RelativeValueType(this.message.tags[RelativeValueType.Tag]);
};

/* field */
RelativeValueGrp.prototype.relativeValue = function () {
  return new RelativeValue(this.message.tags[RelativeValue.Tag]);
};

/* field */
RelativeValueGrp.prototype.relativeValueSide = function () {
  return new RelativeValueSide(this.message.tags[RelativeValueSide.Tag]);
};

/* end group */

RelativeValueGrp.Tag = '2529';

module.exports = RelativeValueGrp;