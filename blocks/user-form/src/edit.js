// blocks/user-form/src/edit.js

import { __ } from "@wordpress/i18n";
import "./style.scss";

const Edit = ({className}) => {
  const now = new Date();
  return (
    <>
      <div className={className} >
        <h2>{__("Show current date", "guten-multi")}</h2>
        <label htmlFor="current-date">{__("Current date is:", "guten-multi")}</label>
        <input type="text" readOnly={true} value={now.toString()} id="current-date" style={{width: "100%"}} />
      </div>
      <hr />
    </>
  );
};

export default Edit;
