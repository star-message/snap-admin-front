import { Button, Box, Link, Typography, Stack } from '@mui/material';
import kakaoIcon from '../../assets/kakao.svg';

export default function Login() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url("https://gram-img.s3.ap-northeast-2.amazonaws.com/aaaa.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Stack sx={{ marginTop: '144px' }}>
          <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '150px', fontWeight: 800 }}>SNAPIT</Typography>
            <Typography sx={{ fontSize: '20px', marginTop: '-30px', fontWeight: 600 }}>
              세상의 모든 사무직들과 그들의 손목을 위해
            </Typography>
            <Stack>
              <Typography
                sx={{ fontSize: '20px', marginTop: '-12px', marginLeft: '1280px', fontWeight: 600 }}
              >
                립모션 장치가 필요해요!
              </Typography>
            </Stack>
          </Stack>
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
                'marginTop': '244px',
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
