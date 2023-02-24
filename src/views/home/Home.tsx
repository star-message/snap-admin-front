import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, styled, Typography, StackProps } from '@mui/material';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import unfilledRadioIcon from '../../assets/unfilledRadio.svg';
import filledRadioIcon from '../../assets/filledRadio.svg';
import profileIcon from '../../assets/profile.svg';
import { userHttpClient } from '../../core/api/axios/user';

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
    }
  }, []);

  return (
    <Box sx={{ padding: '108px 200px 182px' }}>
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
        </CardStack>
        <CardStack
          sx={{
            minWidth: '497px',
          }}
        >
          <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>WEEKLY USER RANKING</Typography>
          <BarChart
            width={411}
            height={500}
            data={[
              {
                name: 'Page A',
                pv: 2400,
              },
              {
                name: 'Page B',
                pv: 1398,
              },
              {
                name: 'Page C',
                pv: 9800,
              },
              {
                name: 'Page D',
                pv: 3908,
              },
              {
                name: 'Page E',
                pv: 4800,
              },
            ]}
          >
            <XAxis dataKey="name" unit={5} />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
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
            sx={{ height: '106px', padding: '35px 38px', justifyContent: 'center' }}
          >
            <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>DAILY MISSION</Typography>
            <Stack direction="row" spacing="13px" sx={{ marginLeft: '78px' }}>
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
          <CardStack sx={{ height: '395px', padding: '323px 135px 36px' }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>START EXERCISE</Typography>
          </CardStack>
        </Stack>
      </Stack>
    </Box>
  );
}
