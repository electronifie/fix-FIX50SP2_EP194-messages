var invert = require('invert-obj');

function AllocRefRiskLimitCheckID (allocRefRiskLimitCheckId) {
  this.message = allocRefRiskLimitCheckId;
}

AllocRefRiskLimitCheckID.prototype.value = function () {
  return this.message;
};

AllocRefRiskLimitCheckID.Tag = '2392';

AllocRefRiskLimitCheckID.Type = 'STRING';

module.exports = AllocRefRiskLimitCheckID;