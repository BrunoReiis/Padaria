import { useEffect } from "react";
import User_a from "../components/User/User - a";
import FormRegistro  from "../components/User/formRegistro";
import TestDb from "../components/TestDb";

function User() {
  useEffect(() => {}, []);

  return (
    <>
      <FormRegistro/>
      <User_a />
      <TestDb />
    </>
  );
}

export default User;
