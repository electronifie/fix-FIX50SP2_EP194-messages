var invert = require('invert-obj');

function SecurityRejectReason (securityRejectReason) {
  this.message = securityRejectReason;
}

SecurityRejectReason.prototype.value = function () {
  return this.message;
};


SecurityRejectReason.Keys = {
  'INVALID_INSTRUMENT_REQUESTED': '1',
  'INSTRUMENT_ALREADY_EXISTS': '2',
  'REQUEST_TYPE_NOT_SUPPORTED': '3',
  'SYSTEM_UNAVAILABLE_FOR_INSTRUMENT_CREATION': '4',
  'INELIGIBLE_INSTRUMENT_GROUP': '5',
  'INSTRUMENT_ID_UNAVAILABLE': '6',
  'INVALID_OR_MISSING_DATA_ON_OPTION_LEG': '7',
  'INVALID_OR_MISSING_DATA_ON_FUTURE_LEG': '8',
  'INVALID_OR_MISSING_DATA_ON_FX_LEG': '10',
  'INVALID_LEG_PRICE_SPECIFIED': '11',
  'INVALID_INSTRUMENT_STRUCTURE_SPECIFIED': '12',
};

SecurityRejectReason.Tag = '1607';

SecurityRejectReason.Type = 'INT';

SecurityRejectReason.Values = invert(SecurityRejectReason.Keys);

module.exports = SecurityRejectReason;