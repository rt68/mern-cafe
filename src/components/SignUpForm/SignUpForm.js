// import { Component } from "react";

// export default class SignUpForm extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     confirm: "",
//     error: "",
//   };
//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: ''
//     });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(this.state)
// }
//   render() {
//     const disable = this.state.password !== this.state.confirm;

//     return (
//   <div>
//     <div className="form-container">
//       <form autoComplete="off" onSubmit={this.handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//           required
//         />
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={this.state.email}
//           onChange={this.handleChange}
//           required
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//           required
//         />
//         <label>Confirm</label>
//         <input
//           type="password"
//           name="confirm"
//           value={this.state.confirm}
//           onChange={this.handleChange}
//           required
//         />
//         <button type="submit" disabled={disable}>
//           SIGN UP
//         </button>
//       </form>
//     </div>
//     <p className="error-message">&nbsp;{this.state.error}</p>
//   </div>
//     );
//   }
// }
//refactor to Functional Component

import { useState } from "react";
import { signUp } from "../../utilities/users-service";
export default function SignUpForm({setUser}) {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    //setUserSignUp({...userSignUp, [name]: value})
    setUserSignUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { ...userSignUp };
      // delete userData.error;
      delete userData.confirm;
      const user = await signUp(userData);
      setUser(user)
    } catch (error) {
      setError("Sign Up Failed")
    }
  };

  const disable = userSignUp.password !== userSignUp.confirm;

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userSignUp.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userSignUp.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userSignUp.password}
            onChange={handleChange}
            required
          />
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            value={userSignUp.confirm}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
