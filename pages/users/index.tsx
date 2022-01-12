import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import styles from '../../styles/Users.module.css';

interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)}  className={styles.card}>
          <p>{user.name}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();
  return {
    props: {
      dataUsers,
    },
  };
}
