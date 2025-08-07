const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class HomeLoanApplicationCase extends BlazeCase {
  constructor() {
    super(
      "HomeLoanApplication",
      "Home Loan Application",
      [
  {
    "id": "1",
    "label": "Loan Application Submission",
    "steps": [
      {
        "id": "1",
        "label": "Form Filling",
        "status": "pending",
        "type": "manual"
      },
      {
        "id": "2",
        "label": "Document Upload",
        "status": "pending",
        "type": "manual"
      }
    ]
  },
  {
    "id": "2",
    "label": "Loan Application Review",
    "steps": [
      {
        "id": "3",
        "label": "Initial Review",
        "status": "pending",
        "type": "automation"
      },
      {
        "id": "4",
        "label": "Verification",
        "status": "pending",
        "type": "automation"
      },
      {
        "id": "5",
        "label": "Approval",
        "status": "pending",
        "type": "manual"
      }
    ]
  }
]
    );
  }
}

module.exports = new HomeLoanApplicationCase();