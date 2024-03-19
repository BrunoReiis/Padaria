import { useState } from "react";
import { auth, db } from "../../scripts/db/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { addDoc, collection } from "firebase/firestore";

const FormRegistro = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
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
      const usersRef = collection(db, "users");

      await createUserWithEmailAndPassword(auth, email, pass);
      await addDoc(usersRef, {
        nome: name,
      });

      setEmail("");
      setPass("");
      setName("");
      alert("Usuario criado com sucesso!");
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
      <input
        placeholder="Nome Completo"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        placeholder="Senha"
        onChange={(e) => setPass(e.target.value)}
        type="password"
        value={pass}
      />
      <button onClick={signIn}>Enviar</button>
    </div>
    
  );
};

export default FormRegistro;
