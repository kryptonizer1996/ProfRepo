import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { connect } from "react-redux";
import classes from "/src/styles.module.css";
import { Table, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const calendar = props => {
  const [state, setState] = useState("");

  const dateClickedHandler = (value, event) => {
    let str1 = value.toString();
    let str = str1.substring(4, 15).trim();
    console.log(str);
    let strTime = "";
    let endTime = "";
    let fullTime = "";
    if(props.val.activity_periods !== undefined){
    for (let i = 0; i < props.val.activity_periods.length; i++) {
      const str2 = props.val.activity_periods[i].start_time
        .substring(0, 11)
        .trim();
      console.log(str2);
      if (str.localeCompare(str2) === 0) {
        strTime = props.val.activity_periods[i].start_time.substring(11);
        endTime = props.val.activity_periods[i].end_time.substring(11);
        fullTime = strTime + " to " + endTime;
        break;
      } else {
        fullTime = "No Activity";
      }
    }
  }

    setState(fullTime);
  };

  console.log(props.val);
  return (
    <div>
      <div className={classes.BackDiv}>
        <div className={classes.DivForCalendar}>
          <Calendar
            className={classes.Calendar}
            onClickDay={(value, event) => dateClickedHandler(value, event)}
          />
        </div>
        <div className={classes.DivForToast}>
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">
                Activity for: {props.val.real_name}
              </strong>
              <small />
            </Toast.Header>
            <Toast.Body>{state}</Toast.Body>
          </Toast>
        </div>
        
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    val: state.currentVal
  };
};

export default connect(mapStateToProps)(calendar);
