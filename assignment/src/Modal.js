import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "/src/styles.module.css";

function modal(props) {
  const [state, setState] = useState({});

  const buttonClickedHandler = event => {
    return props.dispatch({
      type: "CALENDAR",
      payload: props.data
    });
  };

  let update = null;
  console.log(props.data);

  if (props.data.activity_periods !== undefined) {
    update = props.data.activity_periods.map((item, index) => {
      return (
        <div key={index}>
          <ul>
            <li>
              {item.start_time}
              {item.end_time}
            </li>
          </ul>
        </div>
      );
    });
  }

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.hide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            See Activity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{update}</Modal.Body>
        <NavLink
          to="/calendar"
          onClick={buttonClickedHandler}
          className={classes.NavLink}
        >
          To Calendar
        </NavLink>
      </Modal>
    </>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(modal);
