import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const List = ({ expenses }) => (
  <div>
    <ListGroup>
      {expenses.map((item, i) => (
        <ListGroupItem key={i}>
          {item.name} - $ {item.amount}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export default List;
