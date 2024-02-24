// import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import LoginForm from '../../components/LoginForm/LoginForm'
// export default function Auth({setUser}) {
//     return(
//         <main>
//         <h1>Auth</h1>
//         <SignUpForm setUser={setUser}/>
//         <LoginForm setUser={setUser}/>
//         </main>
//     )
// }
import { useState } from 'react';
import styles from './Auth.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import Logo from '../../components/Logo/Logo';

export default function Auth({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.Auth}>
      <div>
        {/* <Logo /> */}
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}