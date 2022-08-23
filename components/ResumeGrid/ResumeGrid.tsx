import {
  Container,
  Grid,
  List,
  Card,
  Text,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  Image,
} from '@mantine/core';
import { Contact } from '../Uses/Contact';
import { Social } from '../Uses/Social';
import { Tools } from '../Uses/Tools';

const PRIMARY_COL_HEIGHT = 300;

export function ResumeGrid() {
  //   const theme = useMantineTheme();
  //   const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
      <SimpleGrid cols={1} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Social />
      </SimpleGrid>
      <SimpleGrid cols={1} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Contact />
      </SimpleGrid>
      <SimpleGrid cols={1} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Tools />
      </SimpleGrid>
    </Container>
  );
}
