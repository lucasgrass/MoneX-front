import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login'); // Redireciona para o login se o usuário não estiver autenticado
    return null; // Pode exibir um loading ou nada enquanto redireciona
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <h1 className={styles.heading}>Bem-vindo, {user.email}!</h1>
        <p className={styles.welcomeMessage}>
          Você está autenticado com sucesso! Essa é a página principal da sua aplicação.
        </p>
        <button onClick={logout} className={styles.logoutButton}>Sair</button>
      </div>
      <Footer />
    </div>
  );
}
