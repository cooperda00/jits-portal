//React
import { useState } from "react";
//Types
import { INewUserError, INewUserForm } from "types";
//Helpers
import axios from "axios";
import toast from "react-hot-toast";
import { validateNewUserForm } from "./validation";

export const useAddNewUser = () => {
  const [form, setForm] = useState<INewUserForm>({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    county: "",
    postcode: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState<INewUserError>({
    key: "",
    message: "",
  });

  const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [isValid, error] = await validateNewUserForm(form);

    if (!isValid && error) {
      setError(error);
      return;
    }

    try {
      await axios.post("/api/users/new", form);
    } catch (error) {
      console.error(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return {
    form,
    error,
    handleUpdateForm,
    handleSubmit,
  };
};
