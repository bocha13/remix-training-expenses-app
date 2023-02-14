import { Link, useSearchParams } from "@remix-run/react";
import { FaLock, FaUser } from "react-icons/fa";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || "login";

  const submitBtnCaption = authMode === "login" ? "Login" : "Create User";
  const toggleBtncaption =
    authMode === "login" ? "Create a new User" : "Log in with existing user";

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authMode === "login" ? <FaLock /> : <FaUser />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{submitBtnCaption}</button>
        <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>
          {toggleBtncaption}
        </Link>
      </div>
    </form>
  );
}

export default AuthForm;
