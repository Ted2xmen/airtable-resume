import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 60,
    fontWeight: 900,
    letterSpacing: 1,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  subTitle: {
    fontSize: 40,
    fontWeight: 800,
    letterSpacing: -2,

    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
    },

  },
}));
