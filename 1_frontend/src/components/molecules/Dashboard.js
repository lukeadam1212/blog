import React from "react";
import Button from "../atoms/Button";
import { getUser, removeUserSession } from "../../utils/Common";

const Dashboard = (props) => {
  const user = getUser();
  // custom functions
  // handling logout

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      <h2>Welcome {user.name}</h2>
      <Button text="Logout" type="submit" onChange={handleLogout} />
    </div>
  );
};

export default Dashboard;
