import React from "react";
import logoFooter from "/assets/logo_header_white.svg";
import classes from "./footer.component.module.css";

export const FooterComponent: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img src={logoFooter} className={classes.footerLogo} />
    </footer>
  );
};
