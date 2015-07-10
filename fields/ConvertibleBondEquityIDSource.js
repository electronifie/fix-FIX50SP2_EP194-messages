var invert = require('invert-obj');

function ConvertibleBondEquityIDSource (convertibleBondEquityIdsource) {
  this.message = convertibleBondEquityIdsource;
}

ConvertibleBondEquityIDSource.prototype.value = function () {
  return this.message;
};

ConvertibleBondEquityIDSource.Tag = '1952';

ConvertibleBondEquityIDSource.Type = 'STRING';

module.exports = ConvertibleBondEquityIDSource;