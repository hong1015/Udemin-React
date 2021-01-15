import React, { useEffect, useRef, useContext } from "react";
import "./Cockpit.css";
import AuthContext from "../../context/auth-context";
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
const authContext = useContext(AuthContext);//hook way to use context

  useEffect(() => {
    console.log("useeffect, cockpit");
    //can do http, load every update, didmount and didupdate combine in one, run after render
    //adding [] at the end to target the pros, so only fire when that change
  }, [props.personsLength]);
  useEffect(() => {
    console.log("useeffect, cockpit blank");
    // if it blank run only the first time
    toggleBtnRef.current.click(); // ref like getting the element and do js function
    return () => {
      //can have no [] so run every cycle
      console.log(
        "useEffect run when this compone is remove, will run before the main useeffect ^, but after the first render cycle"
      );
    };
  }, []);
  let classesArr = [];
  if (props.isPersonsShown) {
    classesArr.push("active");
  } else {
    classesArr = classesArr.filter((c) => c === "active");
  }

  if (props.personsLength < 2) {
    classesArr.push("less");
  }

  let classes = classesArr.join(" ");
  return (
    <div>
      <h1>{props.title}</h1>
      <button ref={toggleBtnRef} onClick={props.clicked} className={classes}>
        Switch Name
      </button>
          <button onClick={authContext.login}>Login</button>
    </div>
  );
};
//only use memo when need to, work the same as should compnent update
export default React.memo(Cockpit);
