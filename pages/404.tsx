import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">OOppss</h1>
      <p className="title-not-found">Halaman yang anda cari tidak ada</p>
    </div>
  );
}
