import { Title, Text, Anchor } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={10}>
        Tuğrul Erdem Dogru
      </Title>
      <Title className={classes.subTitle} align="center" variant="gradient">
        Frontend Developer
      </Title>
      <ColorSchemeToggle />
      <Text color="dimmed" align="center" size="md" sx={{ maxWidth: 680 }} mx="auto" mt="xl">
        Frontend Developer. Mostly Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        minus quae cum placeat eum et amet sunt quidem aliquid voluptate. Mostly React, Vue and
        TailwindCSS. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, incidunt.
      </Text>
    </>
  );
}
