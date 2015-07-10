var NoAllocs = require('../fields/NoAllocs');
var AllocRegulatoryTradeIDGrp = require('../components/AllocRegulatoryTradeIDGrp');
var NestedParties = require('../components/NestedParties');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocPrice = require('../fields/AllocPrice');
var AllocPositionEffect = require('../fields/AllocPositionEffect');
var IndividualAllocID = require('../fields/IndividualAllocID');
var ParentAllocID = require('../fields/ParentAllocID');
var FirmMnemonic = require('../fields/FirmMnemonic');
var IndividualAllocRejCode = require('../fields/IndividualAllocRejCode');
var AllocText = require('../fields/AllocText');
var EncodedAllocTextLen = require('../fields/EncodedAllocTextLen');
var EncodedAllocText = require('../fields/EncodedAllocText');
var FirmAllocText = require('../fields/FirmAllocText');
var EncodedFirmAllocTextLen = require('../fields/EncodedFirmAllocTextLen');
var EncodedFirmAllocText = require('../fields/EncodedFirmAllocText');
var SecondaryIndividualAllocID = require('../fields/SecondaryIndividualAllocID');
var AllocCustomerCapacity = require('../fields/AllocCustomerCapacity');
var IndividualAllocType = require('../fields/IndividualAllocType');
var AllocQty = require('../fields/AllocQty');
var AllocCalculatedCcyQty = require('../fields/AllocCalculatedCcyQty');
var CustodialLotID = require('../fields/CustodialLotID');
var VersusPurchaseDate = require('../fields/VersusPurchaseDate');
var VersusPurchasePrice = require('../fields/VersusPurchasePrice');
var CurrentCostBasis = require('../fields/CurrentCostBasis');

function AllocAckGrp (allocAckGrp) {
  this.message = allocAckGrp;
}

/* group */

/* component */
AllocAckGrp.prototype.allocRegulatoryTradeIdgrp = function () {
  return this.message.groups[AllocRegulatoryTradeIDGrp.Tag]
    .map(function (allocRegulatoryTradeIdgrp) {
      return new AllocRegulatoryTradeIDGrp(allocRegulatoryTradeIdgrp);
  });
};

/* component */
AllocAckGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
AllocAckGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
AllocAckGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
AllocAckGrp.prototype.allocPrice = function () {
  return new AllocPrice(this.message.tags[AllocPrice.Tag]);
};

/* field */
AllocAckGrp.prototype.allocPositionEffect = function () {
  return new AllocPositionEffect(this.message.tags[AllocPositionEffect.Tag]);
};

/* field */
AllocAckGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
AllocAckGrp.prototype.parentAllocId = function () {
  return new ParentAllocID(this.message.tags[ParentAllocID.Tag]);
};

/* field */
AllocAckGrp.prototype.firmMnemonic = function () {
  return new FirmMnemonic(this.message.tags[FirmMnemonic.Tag]);
};

/* field */
AllocAckGrp.prototype.individualAllocRejCode = function () {
  return new IndividualAllocRejCode(this.message.tags[IndividualAllocRejCode.Tag]);
};

/* field */
AllocAckGrp.prototype.allocText = function () {
  return new AllocText(this.message.tags[AllocText.Tag]);
};

/* field */
AllocAckGrp.prototype.encodedAllocTextLen = function () {
  return new EncodedAllocTextLen(this.message.tags[EncodedAllocTextLen.Tag]);
};

/* field */
AllocAckGrp.prototype.encodedAllocText = function () {
  return new EncodedAllocText(this.message.tags[EncodedAllocText.Tag]);
};

/* field */
AllocAckGrp.prototype.firmAllocText = function () {
  return new FirmAllocText(this.message.tags[FirmAllocText.Tag]);
};

/* field */
AllocAckGrp.prototype.encodedFirmAllocTextLen = function () {
  return new EncodedFirmAllocTextLen(this.message.tags[EncodedFirmAllocTextLen.Tag]);
};

/* field */
AllocAckGrp.prototype.encodedFirmAllocText = function () {
  return new EncodedFirmAllocText(this.message.tags[EncodedFirmAllocText.Tag]);
};

/* field */
AllocAckGrp.prototype.secondaryIndividualAllocId = function () {
  return new SecondaryIndividualAllocID(this.message.tags[SecondaryIndividualAllocID.Tag]);
};

/* field */
AllocAckGrp.prototype.allocCustomerCapacity = function () {
  return new AllocCustomerCapacity(this.message.tags[AllocCustomerCapacity.Tag]);
};

/* field */
AllocAckGrp.prototype.individualAllocType = function () {
  return new IndividualAllocType(this.message.tags[IndividualAllocType.Tag]);
};

/* field */
AllocAckGrp.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[AllocQty.Tag]);
};

/* field */
AllocAckGrp.prototype.allocCalculatedCcyQty = function () {
  return new AllocCalculatedCcyQty(this.message.tags[AllocCalculatedCcyQty.Tag]);
};

/* field */
AllocAckGrp.prototype.custodialLotId = function () {
  return new CustodialLotID(this.message.tags[CustodialLotID.Tag]);
};

/* field */
AllocAckGrp.prototype.versusPurchaseDate = function () {
  return new VersusPurchaseDate(this.message.tags[VersusPurchaseDate.Tag]);
};

/* field */
AllocAckGrp.prototype.versusPurchasePrice = function () {
  return new VersusPurchasePrice(this.message.tags[VersusPurchasePrice.Tag]);
};

/* field */
AllocAckGrp.prototype.currentCostBasis = function () {
  return new CurrentCostBasis(this.message.tags[CurrentCostBasis.Tag]);
};

/* end group */

AllocAckGrp.Tag = '78';

module.exports = AllocAckGrp;