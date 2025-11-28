import { useState } from 'react';
import auth from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
// import { createUser } from '../api/user';
// import { initUserItems } from '../api/userItem';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setUserName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password);
      // const newUser = await createUser(name, email);
      // const initItems = await initUserItems(newUser.id);
      // console.log('init', initItems);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleChangeUserName = (event) => {
    setUserName(event.currentTarget.value);
  };
  return (
    <div>
      <h1>ユーザ登録</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>ユーザー名</label>
          <input
            name="userName"
            type="userName"
            placeholder="user name"
            onChange={(event) => handleChangeUserName(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
        <div>
          <Link to={'/login'}>ログイン画面</Link>にもどる
        </div>
      </form>
    </div>
  );
};

export default SignUp;
