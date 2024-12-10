import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#4a4a4a", 
        color: "#fff", 
        padding: "10px 0", 
        textAlign: "center", 
        fontSize: "14px",
      }}
    >
      <p style={{ margin: "0" }}>
        © 2023{" "}
        <span style={{ color: "#ff7733", fontWeight: "bold" }}>FawziUiUx</span> All Rights Reserved, Inc.
      </p>
    </footer>
  );
};

export default Footer;
