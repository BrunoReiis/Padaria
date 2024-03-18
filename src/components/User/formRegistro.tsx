import { useState } from "react";
import { auth } from "../../scripts/db/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const FormRegistro = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const signIn = async () => {
    if (!emailVerification(email)) {
      setMessage("Forneça um email válido!");
      return;
    }

    if (!passVerification(pass)) {
      setMessage("Senha tem que ser maior que 8 caracteres!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (error: any) {
      console.error("Erro ao criar usuário:", (error as FirebaseError).message);
      setMessage("Erro ao criar usuário.");
    }
  };

  const emailVerification = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const passVerification = (pass: string) => {
    if (pass.length < 8) {
      return false;
    }
    return true;
  };

  return (
    <div className="main">
      {message && <p style={{ color: "red" }}>{message}</p>}
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Senha"
        onChange={(e) => setPass(e.target.value)}
        type="password"
      />
      <button onClick={signIn}>Enviar</button>
    </div>
  );
};

export default FormRegistro;
