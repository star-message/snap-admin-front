import { Button, Stack, Link, Typography } from '@mui/material';
import kakaoIcon from '../../assets/kakao.svg';

export default function Login() {
  return (
    <Stack sx={{ width: '320px', margin: '0 auto' }}>
      <Button
        sx={{
          'backgroundColor': '#ffe500',
          'color': 'black',
          '&:hover': { background: '#ffe500' },
          'fontWeight': 500,
        }}
        component={Link}
        href="https://kauth.kakao.com/oauth/authorize?client_id=f8d501e59df79fd396cec2d23a29bee2&redirect_uri=http://localhost:5173/auth/kakao&response_type=code"
      >
        <img src={kakaoIcon} />
        <Typography sx={{ marginLeft: '8px' }}>카카오로 로그인하기</Typography>
      </Button>
    </Stack>
  );
}
