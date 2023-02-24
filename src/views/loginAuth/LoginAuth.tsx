import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { userHttpClient } from '../../core/api/axios/user';

export default function LoginAuth() {
  // NOTE: lib hooks
  const navigation = useNavigate();

  // NOTE: querystring get
  const [searchParam] = useSearchParams();

  // NOTE: effect hooks
  useEffect(() => {
    const code = searchParam.get('code');

    if (code) {
      userHttpClient.kakaoLogin({ code }).then((response) => {
        const { email, teamName, token, userName } = response.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        localStorage.setItem('teamName', teamName);
        localStorage.setItem('userName', userName);
        navigation('/');
      });
    }
  }, []);

  return <div />;
}
