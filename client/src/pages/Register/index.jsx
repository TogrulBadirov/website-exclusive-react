import { Link } from "react-router-dom";
import "./index.scss";

const Register = () => {
  return (
    <>
      <section id="register">
        <div className="login-img">
          <img
            src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1704067200&Signature=arb0jdLVeBEtmb-xK1CHLqsyvaaanspdkF96H9VfCfasKDpQswfOAhuSccak3p3W8vRvsIqch6F67X1Dyl9BcAQekKWqekSnzpxeu3xQi80xP1K7HoABf7sZFGXnBFhS~ulkdvZNYrBSPQV7rpbqEgKEyXM4hcw-a0VKs2vsaiJlTfImJYw3JAdF0rgYvUdQ1LxVvWkwgDLVHn~mWmyraEd7vcowLOjYYM~7V0l6~U15qKMR27WHOFLp1YhkwWeTfadhwp6n9XisXqTxlabJ0mOP7o3QYWjPjwI-xpPyCA~Qd-gj89CJNStUR69aD0L7RwfGpjCKluM-TGTacyrlDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className="login-form">
            <h3>
            Create an account
            </h3>
            <p>
            Enter your details below
            </p>
            <form action="">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email or Phone Number"/>
                <input type="password" placeholder="Password" />
                <div className="login-btn">
                <button>Log In</button>
                </div>
            </form>
            <p>Already have account? <Link to="/login">Log In</Link> </p>
        </div>
      </section>
    </>
  );
};

export default Register;
