import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Group } from '@mantine/core';
import {
  IconBrandJavascript,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandVisualStudio,
  IconBrandNextjs,
  IconBrandGithub,
} from '@tabler/icons';

const mockdata = [
  { title: 'JavaScript', icon: IconBrandJavascript, color: 'yellow' },
  { title: 'React', icon: IconBrandReactNative, color: 'indigo' },
  { title: 'Tailwind', icon: IconBrandTailwind, color: 'blue' },
  { title: 'Visual Studio Code', icon: IconBrandVisualStudio, color: 'green' },
  { title: 'Next JS', icon: IconBrandNextjs, color: 'teal' },
  { title: 'Git & Github', icon: IconBrandGithub, color: 'cyan' },
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

export function Tools() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}> Languages & Tools</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
