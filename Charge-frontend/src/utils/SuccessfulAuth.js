import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [, setCookie] = useCookies(["token"]);
  const history = useHistory();

  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const googleAuth = params.get("token");
    setCookie("token", googleAuth);
    history.push("/dashboard");
  }, []);

  return <div>Successfully Authenticated</div>;
};

export default LoginPage;
