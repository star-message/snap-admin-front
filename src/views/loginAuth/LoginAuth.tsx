import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { userHttpClient } from '../../core/api/axios/user';

export default function LoginAuth() {
  // NOTE: querystring get
  const [searchParam] = useSearchParams();

  // NOTE: effect hooks
  useEffect(() => {
    const code = searchParam.get('code');

    if (code) {
      console.log(code);
      userHttpClient.kakaoLogin({ code }).then((data) => {
        console.log(data);
      });
    }
  }, []);

  return <>fda</>;
}
