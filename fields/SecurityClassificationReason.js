var invert = require('invert-obj');

function SecurityClassificationReason (securityClassificationReason) {
  this.message = securityClassificationReason;
}

SecurityClassificationReason.prototype.value = function () {
  return this.message;
};


SecurityClassificationReason.Keys = {
  FEE: '0',
  CREDIT_CONTROLS: '1',
  MARGIN: '2',
  ENTITLEMENT_ELIGIBILITY: '3',
  MARKET_DATA: '4',
  ACCOUNT_SELECTION: '5',
  DELIVERY_PROCESS: '6',
  SECTOR: '7',
};

SecurityClassificationReason.Tag = '1583';

SecurityClassificationReason.Type = 'INT';

SecurityClassificationReason.Values = invert(SecurityClassificationReason.Keys);

module.exports = SecurityClassificationReason;