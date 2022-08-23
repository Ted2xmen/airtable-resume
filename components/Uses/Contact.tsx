import { createStyles, Alert, Card, Text, SimpleGrid, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    marginBottom: 20,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

export function Contact() {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}> Contact</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {/* {items} */}
        <Alert title="Open to Work" color="teal">
          Hybrid/Remote
        </Alert>
        <Alert title="Phone" color="teal">
          05423457219
        </Alert>
        <Alert title="Email" color="teal">
          tugrulerdemdogr@gmail.com
        </Alert>
      </SimpleGrid>
    </Card>
  );
}
