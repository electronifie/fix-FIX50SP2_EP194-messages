var invert = require('invert-obj');

function RefRiskLimitCheckIDType (refRiskLimitCheckIdtype) {
  this.message = refRiskLimitCheckIdtype;
}

RefRiskLimitCheckIDType.prototype.value = function () {
  return this.message;
};


RefRiskLimitCheckIDType.Keys = {
  'RISKLIMITREQUESTID': '0',
  'RISKLIMITCHECKID': '1',
  'OUT_OF_BAND_IDENTIFIER': '3',
};

RefRiskLimitCheckIDType.Tag = '2335';

RefRiskLimitCheckIDType.Type = 'INT';

RefRiskLimitCheckIDType.Values = invert(RefRiskLimitCheckIDType.Keys);

module.exports = RefRiskLimitCheckIDType;