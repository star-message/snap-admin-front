import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, styled, Typography, StackProps } from '@mui/material';
import { Bar, BarChart, Legend, Tooltip, XAxis } from 'recharts';
import unfilledRadioIcon from '../../assets/unfilledRadio.svg';
import filledRadioIcon from '../../assets/filledRadio.svg';
import profileIcon from '../../assets/profile.svg';
import { userHttpClient } from '../../core/api/axios/user';
import RankImage from '../../assets/rank.png';

const CardStack = styled((props: StackProps) => {
  return <Stack {...props}>{props.children}</Stack>;
})({
  backgroundColor: '#F5F5F5',
  height: '664px',
  borderRadius: '20px',
  padding: '35px 44px 41px',
});

export default function Home() {
  // NOTE: lib hooks
  const navigator = useNavigate();

  // NOTE: localStorage
  const userName = localStorage.getItem('userName');
  const teamName = localStorage.getItem('teamName');

  // NOTE: state hooks
  const [userInfo, setUserInfo] = useState<{
    email: string;
    id: number;
    score: string;
    teamName: string;
    todayCnt: number;
    userName: string;
  }>();
  const [resultInfo, setResultInfo] = useState<{
    privateResult: { email: string; score: number }[];
    teamResult: { teamName: string; score: number }[];
  }>();

  // NOTE: query

  // NOTE: effect hooks
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigator('/login');
    } else {
      userHttpClient.getMyPage().then((response) => {
        if (response.data.response.todayCnt >= 3) {
          response.data.response.todayCnt = 3;
        }
        setUserInfo(response.data.response);
      });

      userHttpClient.getResult().then((response) => {
        setResultInfo(response.data);
      });
    }
  }, []);

  return (
    <Box height="100vh" sx={{ padding: '108px 120px 182px' }}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Stack>
          <Typography sx={{ fontSize: '40px', fontWeight: 800, lineHeight: '60px' }}>
            SNAP IT
          </Typography>
          <Typography sx={{ fontSize: '14px', fontWeight: 600, lineHeight: '21px' }}>
            사무직들을 위한 손목운동 프로그램
          </Typography>
        </Stack>
        <Stack>
          <Button>
            <Typography> 로그아웃</Typography>
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row" spacing="30px" sx={{ width: '100%', marginTop: '44px' }}>
        <CardStack
          sx={{
            minWidth: '497px',
          }}
        >
          <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>WEEKLY TEAM RANKING</Typography>
          <Stack
            sx={{
              height: '300px',
              margin: '28px 0 26px',
              backgroundImage: `url(${RankImage})`,
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: '24px', fontWeight: 700, marginTop: '70px' }}>
              Hello world!
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: 700, marginTop: '4px' }}>
              {resultInfo?.teamResult[0].teamName}
            </Typography>
          </Stack>

          <Stack spacing="9px">
            {resultInfo?.teamResult.map((item, index) => {
              return (
                <Stack
                  key={item.score}
                  direction="row"
                  sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Stack direction="row" spacing="21px" sx={{ alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '40px', fontWeight: 800 }}>{index + 1}</Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 800 }}>
                      {item.teamName}
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: '20px', fontWeight: 800 }}>{item.score}점</Typography>
                </Stack>
              );
            })}
          </Stack>
        </CardStack>
        <CardStack
          sx={{
            minWidth: '497px',
          }}
        >
          <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>WEEKLY USER RANKING</Typography>
          <Stack sx={{ marginTop: '56px' }}>
            <BarChart width={411} height={500} data={resultInfo?.privateResult}>
              <XAxis dataKey="userName" />
              <Tooltip />
              <Bar dataKey="score" fill="#8884d8" barSize={69} />
            </BarChart>
          </Stack>
        </CardStack>
        <Stack spacing="13px" sx={{ width: '100%' }}>
          <CardStack
            direction="row"
            sx={{ height: '137px', padding: '35px 38px', justifyContent: 'space-between' }}
          >
            <Stack>
              <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>USER PROFILE</Typography>
              <Stack direction="row" sx={{ alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    marginRight: '15px',
                    paddingTop: '4px',
                  }}
                >
                  {teamName}
                </Typography>
                <Typography sx={{ fontSize: '18px', marginTop: '4px' }}>{userName}</Typography>
              </Stack>
            </Stack>
            <img src={profileIcon} />
          </CardStack>
          <CardStack
            direction="row"
            sx={{
              padding: '35px 38px',
              height: '106px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ fontSize: '20px', fontWeight: 800 }}>DAILY MISSION</Typography>
            <Stack direction="row" spacing="13px">
              {!userInfo?.todayCnt && (
                <>
                  <img src={unfilledRadioIcon} />
                  <img src={unfilledRadioIcon} />
                  <img src={unfilledRadioIcon} />
                </>
              )}
              {userInfo?.todayCnt === 1 && (
                <>
                  <img src={filledRadioIcon} />
                  <img src={unfilledRadioIcon} />
                  <img src={unfilledRadioIcon} />
                </>
              )}
              {userInfo?.todayCnt === 2 && (
                <>
                  <img src={filledRadioIcon} />
                  <img src={filledRadioIcon} />
                  <img src={unfilledRadioIcon} />
                </>
              )}
              {userInfo?.todayCnt === 3 && (
                <>
                  <img src={filledRadioIcon} />
                  <img src={filledRadioIcon} />
                  <img src={filledRadioIcon} />
                </>
              )}
            </Stack>
          </CardStack>
          <CardStack
            sx={{
              height: '395px',
              backgroundColor: '#202223',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: '24px', fontWeight: 800, color: '#FFF' }}>
              START EXERCISE
            </Typography>
          </CardStack>
        </Stack>
      </Stack>
    </Box>
  );
}
