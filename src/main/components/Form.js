import React from "react";
import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";

const Form = ({
  name,
  amount,
  handleName,
  handleAmount,
  handleSubmitForm,
  handleClearExpenses,
}) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        Name of Expense
      </Label>
      <Col sm={4}>
        <Input
          type="text"
          name="name"
          id="expenseName"
          autoComplete="off"
          placeholder="Name of expense?"
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        ₹ Amount
      </Label>
      <Col sm={4}>
        <Input
          type="number"
          autoComplete="off"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <Button type="submit" color="primary">
      Add
    </Button>{" "}
    <Button type="submit" color="danger" onClick={handleClearExpenses}>
      Delete
    </Button>
  </BTForm>
);

export default Form;
