import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "/src/styles.module.css";
import Modal from "/src/Modal.js";

const card = props => {
  const [lgShow, setLgShow] = useState(false);
  const [data, setData] = useState({});

  const buttonClickedHandler = item => {
    setLgShow(true);
    setData(item);
  };

  const update = props.data.members.map((item, index) => {
    const im = item.tz.replace("/", ",");
    return (
      <div className={classes.CardMargin} key={index}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{item.real_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Id: {item.id}
            </Card.Subtitle>
            <Card.Text>{im}</Card.Text>
            {/* <Card.Link href="#">See Activity</Card.Link> */}
            <Button onClick={() => buttonClickedHandler(item)}>
              See Activity
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div className={classes.DivForCard}>
        {update}
        <Modal data={data} hide={() => setLgShow(false)} show={lgShow} />
    </div>
  );
};

export default card;
