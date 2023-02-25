import { Button, Box, Link, Typography, Stack } from '@mui/material';
import kakaoIcon from '../../assets/kakao.svg';

export default function Login() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url("https://gram-img.s3.ap-northeast-2.amazonaws.com/login-img.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Stack sx={{ marginTop: '144px' }}>
          <Stack sx={{ margin: '0 auto' }}>
            <Button
              sx={{
                'width': '256px',
                'height': '80px',
                'backgroundColor': '#ffe500',
                'color': 'black',
                '&:hover': { background: '#ffe500' },
                'fontWeight': 500,
                'borderRadius': '20px',
                'marginTop': '40vh',
              }}
              component={Link}
              href="https://kauth.kakao.com/oauth/authorize?client_id=f8d501e59df79fd396cec2d23a29bee2&redirect_uri=http://localhost:5173/auth/kakao&response_type=code"
            >
              <img src={kakaoIcon} />
              <Typography sx={{ marginLeft: '17px', fontSize: '20px' }}>카카오 로그인</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
