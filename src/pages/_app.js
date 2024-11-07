import '../styles/global.css'; // Estilos globais
import { AuthProvider } from '../context/AuthContext'; // Importando o provedor do contexto de autenticação
//import Header from '../components/Header'; // Importando o componente de cabeçalho
//import Footer from '../components/Footer'; // Importando o componente de rodapé

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      
      <Component {...pageProps} />
      
    </AuthProvider>
  );
}

export default MyApp;