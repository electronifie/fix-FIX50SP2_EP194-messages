var invert = require('invert-obj');

function RelatedPositionDate (relatedPositionDate) {
  this.message = relatedPositionDate;
}

RelatedPositionDate.prototype.value = function () {
  return this.message;
};

RelatedPositionDate.Tag = '1864';

RelatedPositionDate.Type = 'LOCALMKTDATE';

module.exports = RelatedPositionDate;