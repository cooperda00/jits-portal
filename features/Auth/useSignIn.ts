//React
import React, { useState } from "react";
//Firebase
import { auth } from "firebase/config";

export const useSignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(form.email, form.password)
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return {
    email: form.email,
    password: form.password,
    error,
    handleSubmit,
    handleChange,
  };
};
