import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona automaticamente para a página de login
    router.push('/login');
  }, [router]);

  return <div>Redirecionando...</div>; // Pode ser uma tela de loading ou nada
}