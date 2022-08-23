import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Group } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconBrandMedium } from '@tabler/icons';
import Link from 'next/link';

const mockdata = [
  { title: 'Medium', icon: IconBrandMedium, color: 'yellow', url: 'https://ted2xmen.medium.com/' },
  {
    title: 'Linkedin',
    icon: IconBrandLinkedin,
    color: 'indigo',
    url: 'https://www.linkedin.com/in/tugrulerdemdogru',
  },
  { title: 'Github', icon: IconBrandGithub, color: 'blue', url: 'https://github.com/ted2xmen' },
];

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

export function Social() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <Link href={item.url} passHref>
      <UnstyledButton key={item.title} className={classes.item}>
        <item.icon color={theme.colors[item.color][6]} size={32} />
        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}> Social</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
