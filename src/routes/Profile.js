import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const History = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    History.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
