import React from "react";
import { withRouter } from "next/router";
const Btn = (
  { href, onClick, children, router } // routerprop is injected by withRouter HOC
) => (
  <span>
    <button
      onClick={onClick}
      style={{ fontWeight: router.pathname === href ? "bold" : "" }}
    >
      {children}
    </button>
    <style jsx>{`
      button {
        color: blue;
        border: 1px solid;
        cursor: pointer;
      }
      button:hover {
        color: red;
      }
      button.current {
        font-weight: bold;
      }
    `}</style>
  </span>
);
export default withRouter(Btn);
