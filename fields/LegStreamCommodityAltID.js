var invert = require('invert-obj');

function LegStreamCommodityAltID (legStreamCommodityAltId) {
  this.message = legStreamCommodityAltId;
}

LegStreamCommodityAltID.prototype.value = function () {
  return this.message;
};

LegStreamCommodityAltID.Tag = '41675';

LegStreamCommodityAltID.Type = 'STRING';

module.exports = LegStreamCommodityAltID;