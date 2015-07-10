var LegFinancingContractualDefinitionsGrp = require('../components/LegFinancingContractualDefinitionsGrp');
var LegFinancingTermSupplementGrp = require('../components/LegFinancingTermSupplementGrp');
var LegFinancingContractualMatrixGrp = require('../components/LegFinancingContractualMatrixGrp');
var LegAgreementDesc = require('../fields/LegAgreementDesc');
var LegAgreementID = require('../fields/LegAgreementID');
var LegAgreementVersion = require('../fields/LegAgreementVersion');
var LegAgreementDate = require('../fields/LegAgreementDate');
var LegAgreementCurrency = require('../fields/LegAgreementCurrency');
var LegMasterConfirmationDesc = require('../fields/LegMasterConfirmationDesc');
var LegMasterConfirmationDate = require('../fields/LegMasterConfirmationDate');
var LegMasterConfirmationAnnexDesc = require('../fields/LegMasterConfirmationAnnexDesc');
var LegMasterConfirmationAnnexDate = require('../fields/LegMasterConfirmationAnnexDate');
var LegBrokerConfirmationDesc = require('../fields/LegBrokerConfirmationDesc');
var LegCreditSupportAgreementDesc = require('../fields/LegCreditSupportAgreementDesc');
var LegCreditSupportAgreementDate = require('../fields/LegCreditSupportAgreementDate');
var LegCreditSupportAgreementID = require('../fields/LegCreditSupportAgreementID');
var LegGoverningLaw = require('../fields/LegGoverningLaw');
var LegDocumentationText = require('../fields/LegDocumentationText');
var EncodedLegDocumentationTextLen = require('../fields/EncodedLegDocumentationTextLen');
var EncodedLegDocumentationText = require('../fields/EncodedLegDocumentationText');
var LegTerminationType = require('../fields/LegTerminationType');
var LegStartDate = require('../fields/LegStartDate');
var LegEndDate = require('../fields/LegEndDate');
var LegDeliveryType = require('../fields/LegDeliveryType');
var LegMarginRatio = require('../fields/LegMarginRatio');

function LegFinancingDetails (legFinancingDetails) {
  this.message = legFinancingDetails;
}
/* component */
LegFinancingDetails.prototype.legFinancingContractualDefinitionsGrp = function () {
  return this.message.groups[LegFinancingContractualDefinitionsGrp.Tag]
    .map(function (legFinancingContractualDefinitionsGrp) {
      return new LegFinancingContractualDefinitionsGrp(legFinancingContractualDefinitionsGrp);
  });
};

/* component */
LegFinancingDetails.prototype.legFinancingTermSupplementGrp = function () {
  return this.message.groups[LegFinancingTermSupplementGrp.Tag]
    .map(function (legFinancingTermSupplementGrp) {
      return new LegFinancingTermSupplementGrp(legFinancingTermSupplementGrp);
  });
};

/* component */
LegFinancingDetails.prototype.legFinancingContractualMatrixGrp = function () {
  return this.message.groups[LegFinancingContractualMatrixGrp.Tag]
    .map(function (legFinancingContractualMatrixGrp) {
      return new LegFinancingContractualMatrixGrp(legFinancingContractualMatrixGrp);
  });
};

/* field */
LegFinancingDetails.prototype.legAgreementDesc = function () {
  return new LegAgreementDesc(this.message.tags[LegAgreementDesc.Tag]);
};

/* field */
LegFinancingDetails.prototype.legAgreementId = function () {
  return new LegAgreementID(this.message.tags[LegAgreementID.Tag]);
};

/* field */
LegFinancingDetails.prototype.legAgreementVersion = function () {
  return new LegAgreementVersion(this.message.tags[LegAgreementVersion.Tag]);
};

/* field */
LegFinancingDetails.prototype.legAgreementDate = function () {
  return new LegAgreementDate(this.message.tags[LegAgreementDate.Tag]);
};

/* field */
LegFinancingDetails.prototype.legAgreementCurrency = function () {
  return new LegAgreementCurrency(this.message.tags[LegAgreementCurrency.Tag]);
};

/* field */
LegFinancingDetails.prototype.legMasterConfirmationDesc = function () {
  return new LegMasterConfirmationDesc(this.message.tags[LegMasterConfirmationDesc.Tag]);
};

/* field */
LegFinancingDetails.prototype.legMasterConfirmationDate = function () {
  return new LegMasterConfirmationDate(this.message.tags[LegMasterConfirmationDate.Tag]);
};

/* field */
LegFinancingDetails.prototype.legMasterConfirmationAnnexDesc = function () {
  return new LegMasterConfirmationAnnexDesc(this.message.tags[LegMasterConfirmationAnnexDesc.Tag]);
};

/* field */
LegFinancingDetails.prototype.legMasterConfirmationAnnexDate = function () {
  return new LegMasterConfirmationAnnexDate(this.message.tags[LegMasterConfirmationAnnexDate.Tag]);
};

/* field */
LegFinancingDetails.prototype.legBrokerConfirmationDesc = function () {
  return new LegBrokerConfirmationDesc(this.message.tags[LegBrokerConfirmationDesc.Tag]);
};

/* field */
LegFinancingDetails.prototype.legCreditSupportAgreementDesc = function () {
  return new LegCreditSupportAgreementDesc(this.message.tags[LegCreditSupportAgreementDesc.Tag]);
};

/* field */
LegFinancingDetails.prototype.legCreditSupportAgreementDate = function () {
  return new LegCreditSupportAgreementDate(this.message.tags[LegCreditSupportAgreementDate.Tag]);
};

/* field */
LegFinancingDetails.prototype.legCreditSupportAgreementId = function () {
  return new LegCreditSupportAgreementID(this.message.tags[LegCreditSupportAgreementID.Tag]);
};

/* field */
LegFinancingDetails.prototype.legGoverningLaw = function () {
  return new LegGoverningLaw(this.message.tags[LegGoverningLaw.Tag]);
};

/* field */
LegFinancingDetails.prototype.legDocumentationText = function () {
  return new LegDocumentationText(this.message.tags[LegDocumentationText.Tag]);
};

/* field */
LegFinancingDetails.prototype.encodedLegDocumentationTextLen = function () {
  return new EncodedLegDocumentationTextLen(this.message.tags[EncodedLegDocumentationTextLen.Tag]);
};

/* field */
LegFinancingDetails.prototype.encodedLegDocumentationText = function () {
  return new EncodedLegDocumentationText(this.message.tags[EncodedLegDocumentationText.Tag]);
};

/* field */
LegFinancingDetails.prototype.legTerminationType = function () {
  return new LegTerminationType(this.message.tags[LegTerminationType.Tag]);
};

/* field */
LegFinancingDetails.prototype.legStartDate = function () {
  return new LegStartDate(this.message.tags[LegStartDate.Tag]);
};

/* field */
LegFinancingDetails.prototype.legEndDate = function () {
  return new LegEndDate(this.message.tags[LegEndDate.Tag]);
};

/* field */
LegFinancingDetails.prototype.legDeliveryType = function () {
  return new LegDeliveryType(this.message.tags[LegDeliveryType.Tag]);
};

/* field */
LegFinancingDetails.prototype.legMarginRatio = function () {
  return new LegMarginRatio(this.message.tags[LegMarginRatio.Tag]);
};



LegFinancingDetails.Tag = '2497';

module.exports = LegFinancingDetails;