import React, { useState } from 'react';
import { signInWithGooglePopup, signUpWithEmailAndPassword } from '../utils/firebase';
// import UserDetails from './UserDetails'; // 假設你的 UserDetails 組件的路徑正確
import LogInToBackend from './LogInToBackend'


const SignInWithGoogleAndEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRegistered, setUserRegistered] = useState(false);

  const handleSignUpWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      const user = await signUpWithEmailAndPassword(email, password);
      console.log('使用者註冊成功:', user);
      setUserRegistered(true);
    } catch (error) {
      console.error('使用者註冊錯誤:', error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const user = await signInWithGooglePopup();
      console.log('Google 登入成功:', user);
    } catch (error) {
      console.error('Google 登入錯誤:', error.message);
    }
  };

  if (userRegistered) {
    // return <UserDetails email={email} password={password} />; //測試用
    return <LogInToBackend email={email} password={password} />; //已經拿取資料要送至後端模組

  }

  return (
    <div>
      <h2>註冊新帳號</h2>
      <form onSubmit={handleSignUpWithEmailAndPassword}>
        <label>
          電子郵件：
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          密碼：
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">使用電子郵件與密碼註冊</button>
      </form>
      <button onClick={handleSignInWithGoogle}>使用 Google 登入</button>
    </div>
  );
};

export default SignInWithGoogleAndEmail;
