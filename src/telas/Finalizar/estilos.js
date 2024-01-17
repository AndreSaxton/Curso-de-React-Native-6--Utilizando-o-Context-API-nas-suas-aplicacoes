import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const estilos = (tema) => {
 return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tema.fundo,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  tituloArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: tema.titulo,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: tema.texto,
  },
  resumoArea: {
    flex: 1,
    margin: 16,
  },
  enderecoArea: {
    padding: 16,
    margin: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'flex-start',
    backgroundColor: tema.cinza,
  },
  lista: {
    flex: 1,
    width: '100%',
  },
  ultimosVistos: {
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: tema.ultimosVistos,
  },
  tituloUltimosVistos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tema.titulo,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  carrinhoArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  carrinhoIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: tema.titulo,
  },
  carrinhoQuantidadeArea: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carrinhoQuantidade: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#fff",
  },
  iconArea: {
    marginLeft: 16,
  },
  icon: {
    color: tema.texto,
    fontSize: 30,
  },
  botao:{
    margin: 16,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: tema.botao,
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tema.preto,
    textAlign: 'center',
  },

})
}