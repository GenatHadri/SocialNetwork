import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:8000/api/register", {
    //     name,
    //     email,
    //     password,
    //     secret,
    //   })
    //   .then((res) => setOk(res.data.ok))
    //   .catch((err) => toast.error(err.response.data));

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        {
          email,
          password,
        }
      );
      console.log(data);
      setLoading(false);
      // router.push("/");
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image text-light">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="login"
          />

          <p className="text-center">
            Not registered yet?{" "}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
