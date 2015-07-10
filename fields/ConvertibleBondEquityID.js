var invert = require('invert-obj');

function ConvertibleBondEquityID (convertibleBondEquityId) {
  this.message = convertibleBondEquityId;
}

ConvertibleBondEquityID.prototype.value = function () {
  return this.message;
};

ConvertibleBondEquityID.Tag = '1951';

ConvertibleBondEquityID.Type = 'STRING';

module.exports = ConvertibleBondEquityID;