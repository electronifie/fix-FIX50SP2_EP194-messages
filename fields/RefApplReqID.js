var invert = require('invert-obj');

function RefApplReqID (refApplReqId) {
  this.message = refApplReqId;
}

RefApplReqID.prototype.value = function () {
  return this.message;
};

RefApplReqID.Tag = '1433';

RefApplReqID.Type = 'STRING';

module.exports = RefApplReqID;