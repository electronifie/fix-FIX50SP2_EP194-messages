var invert = require('invert-obj');

function RegulatoryLegRefID (regulatoryLegRefId) {
  this.message = regulatoryLegRefId;
}

RegulatoryLegRefID.prototype.value = function () {
  return this.message;
};

RegulatoryLegRefID.Tag = '2411';

RegulatoryLegRefID.Type = 'STRING';

module.exports = RegulatoryLegRefID;