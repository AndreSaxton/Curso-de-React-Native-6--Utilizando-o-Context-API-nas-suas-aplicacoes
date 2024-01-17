import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { ProdutosContext } from '../../context/ProdutosContext';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { TemaContext } from '../../contexts/TemaContext';
import { estilos } from './estilos';
import { useContext } from 'react';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

export default function Finalizar({navigation}) {
  const {
    quantidade,
    carrinho,
    precoTotal,
    finalizarCompra,
  } = useContext(ProdutosContext);

  const {
    temas,
  } = useContext(TemaContext);

  const {
    usuario
  } = useContext(AutenticacaoContext);

  const estilo = estilos(temas);

  async function finalizar() {
    const resultado = await finalizarCompra();
    console.log(resultado);
    // Alert.alert(resultado);
    alert(resultado);
    navigation.navigate('Principal');
  }

  return (
    <View style={estilo.container}>
      <StatusBar />

      <View style={estilo.enderecoArea}>
        <Text style={estilo.titulo}>Informações de entrega</Text>
        <Text style={estilo.texto}>Nome: {usuario?.nome}</Text>
        <Text style={estilo.texto}>Endereço: {usuario?.endereco}</Text>
        <Text style={estilo.texto}>Email: {usuario?.email}</Text>
        <Text style={estilo.texto}>Telefone: {usuario?.telefone}</Text>
      </View>

      <View style={estilo.resumoArea}>
        <Text style={estilo.texto}>Quantidade: {quantidade}</Text>
        <Text style={estilo.texto}>Preço Total: R$ {precoTotal}</Text>
      </View>

      <TouchableOpacity style={estilo.botao}
        onPress={() => finalizar()}
      >
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>

    </View>
  );
}

