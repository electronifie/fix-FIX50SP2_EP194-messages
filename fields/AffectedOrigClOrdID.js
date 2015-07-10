var invert = require('invert-obj');

function AffectedOrigClOrdID (affectedOrigClOrdId) {
  this.message = affectedOrigClOrdId;
}

AffectedOrigClOrdID.prototype.value = function () {
  return this.message;
};

AffectedOrigClOrdID.Tag = '1824';

AffectedOrigClOrdID.Type = 'STRING';

module.exports = AffectedOrigClOrdID;