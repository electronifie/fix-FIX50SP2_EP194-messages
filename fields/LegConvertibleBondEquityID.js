var invert = require('invert-obj');

function LegConvertibleBondEquityID (legConvertibleBondEquityId) {
  this.message = legConvertibleBondEquityId;
}

LegConvertibleBondEquityID.prototype.value = function () {
  return this.message;
};

LegConvertibleBondEquityID.Tag = '2166';

LegConvertibleBondEquityID.Type = 'STRING';

module.exports = LegConvertibleBondEquityID;