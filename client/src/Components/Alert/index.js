import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { Snackbar, SnackbarContainer, AlertLabel, AlertLogo } from "./style";
import AlterImg from "../../Images/warning.png";
export default function Alerts() {
  const { alerts } = useContext(GlobalContext);
  const showAlertBox = (alert) => {
    return (
      <Snackbar isVisible={!!alert?.id} id="snackbar">
        <SnackbarContainer>
          <AlertLogo src={AlterImg} alt="alert-img" />
          <AlertLabel>{alert.msg}</AlertLabel>
        </SnackbarContainer>
      </Snackbar>
    );
  };

  return alerts.length > 0 ? showAlertBox(alerts[alerts.length - 1]) : null;
}