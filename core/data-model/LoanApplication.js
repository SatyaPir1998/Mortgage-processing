module.exports = {
  id: "LoanApplication",
  label: "LoanApplication",
  description: "",
  fields: [
  {
    "id": "1",
    "name": "applicantName",
    "type": "string",
    "required": true,
    "description": "Name of the loan applicant"
  },
  {
    "id": "2",
    "name": "applicantIncome",
    "type": "number",
    "required": true,
    "description": "Monthly income of the loan applicant"
  },
  {
    "id": "3",
    "name": "loanAmount",
    "type": "number",
    "required": true,
    "description": "Amount of loan applied for"
  },
  {
    "id": "4",
    "name": "loanPurpose",
    "type": "string",
    "required": true,
    "description": "Purpose for the home loan"
  },
  {
    "id": "5",
    "name": "applicantCreditScore",
    "type": "number",
    "required": true,
    "description": "Credit score of the loan applicant"
  },
  {
    "id": "6",
    "name": "applicationStatus",
    "type": "string",
    "required": true,
    "description": "Current status of the loan application"
  }
]
};