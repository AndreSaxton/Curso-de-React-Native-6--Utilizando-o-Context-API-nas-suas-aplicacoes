import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { ProdutosProvider } from "./src/contexts/ProdutosContext";
import { TemaProvider } from "./src/contexts/TemaContext";
import Rotas from "./src/rotas";
import { InfoProvider } from "./src/context/GlobalContext";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProdutosProvider>
          <InfoProvider>
            <Rotas />
          </InfoProvider>
        </ProdutosProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}