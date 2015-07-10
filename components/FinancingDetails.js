var FinancingContractualDefinitionGrp = require('../components/FinancingContractualDefinitionGrp');
var FinancingTermSupplementGrp = require('../components/FinancingTermSupplementGrp');
var FinancingContractualMatrixGrp = require('../components/FinancingContractualMatrixGrp');
var AgreementDesc = require('../fields/AgreementDesc');
var AgreementID = require('../fields/AgreementID');
var AgreementVersion = require('../fields/AgreementVersion');
var AgreementDate = require('../fields/AgreementDate');
var AgreementCurrency = require('../fields/AgreementCurrency');
var MasterConfirmationDesc = require('../fields/MasterConfirmationDesc');
var MasterConfirmationDate = require('../fields/MasterConfirmationDate');
var MasterConfirmationAnnexDesc = require('../fields/MasterConfirmationAnnexDesc');
var MasterConfirmationAnnexDate = require('../fields/MasterConfirmationAnnexDate');
var BrokerConfirmationDesc = require('../fields/BrokerConfirmationDesc');
var CreditSupportAgreementDesc = require('../fields/CreditSupportAgreementDesc');
var CreditSupportAgreementDate = require('../fields/CreditSupportAgreementDate');
var CreditSupportAgreementID = require('../fields/CreditSupportAgreementID');
var GoverningLaw = require('../fields/GoverningLaw');
var DocumentationText = require('../fields/DocumentationText');
var EncodedDocumentationTextLen = require('../fields/EncodedDocumentationTextLen');
var EncodedDocumentationText = require('../fields/EncodedDocumentationText');
var TerminationType = require('../fields/TerminationType');
var StartDate = require('../fields/StartDate');
var EndDate = require('../fields/EndDate');
var DeliveryType = require('../fields/DeliveryType');
var MarginRatio = require('../fields/MarginRatio');

function FinancingDetails (financingDetails) {
  this.message = financingDetails;
}
/* component */
FinancingDetails.prototype.financingContractualDefinitionGrp = function () {
  return this.message.groups[FinancingContractualDefinitionGrp.Tag]
    .map(function (financingContractualDefinitionGrp) {
      return new FinancingContractualDefinitionGrp(financingContractualDefinitionGrp);
  });
};

/* component */
FinancingDetails.prototype.financingTermSupplementGrp = function () {
  return this.message.groups[FinancingTermSupplementGrp.Tag]
    .map(function (financingTermSupplementGrp) {
      return new FinancingTermSupplementGrp(financingTermSupplementGrp);
  });
};

/* component */
FinancingDetails.prototype.financingContractualMatrixGrp = function () {
  return this.message.groups[FinancingContractualMatrixGrp.Tag]
    .map(function (financingContractualMatrixGrp) {
      return new FinancingContractualMatrixGrp(financingContractualMatrixGrp);
  });
};

/* field */
FinancingDetails.prototype.agreementDesc = function () {
  return new AgreementDesc(this.message.tags[AgreementDesc.Tag]);
};

/* field */
FinancingDetails.prototype.agreementId = function () {
  return new AgreementID(this.message.tags[AgreementID.Tag]);
};

/* field */
FinancingDetails.prototype.agreementVersion = function () {
  return new AgreementVersion(this.message.tags[AgreementVersion.Tag]);
};

/* field */
FinancingDetails.prototype.agreementDate = function () {
  return new AgreementDate(this.message.tags[AgreementDate.Tag]);
};

/* field */
FinancingDetails.prototype.agreementCurrency = function () {
  return new AgreementCurrency(this.message.tags[AgreementCurrency.Tag]);
};

/* field */
FinancingDetails.prototype.masterConfirmationDesc = function () {
  return new MasterConfirmationDesc(this.message.tags[MasterConfirmationDesc.Tag]);
};

/* field */
FinancingDetails.prototype.masterConfirmationDate = function () {
  return new MasterConfirmationDate(this.message.tags[MasterConfirmationDate.Tag]);
};

/* field */
FinancingDetails.prototype.masterConfirmationAnnexDesc = function () {
  return new MasterConfirmationAnnexDesc(this.message.tags[MasterConfirmationAnnexDesc.Tag]);
};

/* field */
FinancingDetails.prototype.masterConfirmationAnnexDate = function () {
  return new MasterConfirmationAnnexDate(this.message.tags[MasterConfirmationAnnexDate.Tag]);
};

/* field */
FinancingDetails.prototype.brokerConfirmationDesc = function () {
  return new BrokerConfirmationDesc(this.message.tags[BrokerConfirmationDesc.Tag]);
};

/* field */
FinancingDetails.prototype.creditSupportAgreementDesc = function () {
  return new CreditSupportAgreementDesc(this.message.tags[CreditSupportAgreementDesc.Tag]);
};

/* field */
FinancingDetails.prototype.creditSupportAgreementDate = function () {
  return new CreditSupportAgreementDate(this.message.tags[CreditSupportAgreementDate.Tag]);
};

/* field */
FinancingDetails.prototype.creditSupportAgreementId = function () {
  return new CreditSupportAgreementID(this.message.tags[CreditSupportAgreementID.Tag]);
};

/* field */
FinancingDetails.prototype.governingLaw = function () {
  return new GoverningLaw(this.message.tags[GoverningLaw.Tag]);
};

/* field */
FinancingDetails.prototype.documentationText = function () {
  return new DocumentationText(this.message.tags[DocumentationText.Tag]);
};

/* field */
FinancingDetails.prototype.encodedDocumentationTextLen = function () {
  return new EncodedDocumentationTextLen(this.message.tags[EncodedDocumentationTextLen.Tag]);
};

/* field */
FinancingDetails.prototype.encodedDocumentationText = function () {
  return new EncodedDocumentationText(this.message.tags[EncodedDocumentationText.Tag]);
};

/* field */
FinancingDetails.prototype.terminationType = function () {
  return new TerminationType(this.message.tags[TerminationType.Tag]);
};

/* field */
FinancingDetails.prototype.startDate = function () {
  return new StartDate(this.message.tags[StartDate.Tag]);
};

/* field */
FinancingDetails.prototype.endDate = function () {
  return new EndDate(this.message.tags[EndDate.Tag]);
};

/* field */
FinancingDetails.prototype.deliveryType = function () {
  return new DeliveryType(this.message.tags[DeliveryType.Tag]);
};

/* field */
FinancingDetails.prototype.marginRatio = function () {
  return new MarginRatio(this.message.tags[MarginRatio.Tag]);
};



FinancingDetails.Tag = '913';

module.exports = FinancingDetails;