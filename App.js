import { TemaProvider } from "./src/contexts/TemaContext";
import Rotas from "./src/rotas";
import { AutenticacaoProvider } from "./src/context/AutenticacaoContext";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <Rotas />
      </AutenticacaoProvider>
    </TemaProvider>
  );
}