
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectToHome() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;
}
