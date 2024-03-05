import { useEffect } from "react";
import User_a from "../components/User/User - a";
import FormRegistro  from "../components/User/formRegistro";

function User() {
  useEffect(() => {}, []);

  return (
    <>
      <FormRegistro/>
      <User_a />
    </>
  );
}

export default User;
