var invert = require('invert-obj');

function RefRiskLimitCheckID (refRiskLimitCheckId) {
  this.message = refRiskLimitCheckId;
}

RefRiskLimitCheckID.prototype.value = function () {
  return this.message;
};

RefRiskLimitCheckID.Tag = '2334';

RefRiskLimitCheckID.Type = 'STRING';

module.exports = RefRiskLimitCheckID;