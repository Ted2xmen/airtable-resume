import { ResumeGrid } from '../components/ResumeGrid/ResumeGrid';
import Layout from '../components/Layout';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Layout>
        <Welcome />
        <ResumeGrid />
      </Layout>
    </>
  );
}
