// import { useRouter } from 'next/router';
import Layout from '../../components/layout';

interface User {
  id: number;
  name: string;
}

interface UsersDetailProps {
  user : User;
}
export default function UsersDetail(props: UsersDetailProps) {
  // const router = useRouter();
  // const { id } = router.query;
  const { user } = props;
  return (
    <Layout pageTitle="User Detail Page">
      <div>
        <p>
          {user.name}
        </p>
      </div>
    </Layout>
  );
}

interface GetStaticProps {
  params: {
    id: number
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();
  return {
    props: {
      user,
    },
  };
}
