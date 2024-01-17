import { Text, View, Switch } from 'react-native';
import { estilos } from './estilos';
import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";

export default function Configuracao({ navigation }) {
  const {
    temas,
    tema,
    setTemaAtual,
    salvarTemaNoDispositivo
  } = useContext(TemaContext);

  const estilo = estilos(temas);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: {tema}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={tema === 'escuro' ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => salvarTemaNoDispositivo(tema === 'escuro' ? 'claro' : 'escuro')}
        value={tema === 'escuro'}
      />
      </View>
    </View>
  );
}

