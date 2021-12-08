import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Aluno from './src/Atividade1/Aluno';
import Imagem from './src/Atividade1/Imagem';
import Cabecalho from './src/Atividade2/Cabecalho';
import Corpo from './src/Atividade2/Corpo';
import Disciplina from './src/Atividade2/Disciplina';
import CalculadoraApp from './src/Atividade3/IMCApp';
import Atividade03 from './src/Atividade3b/Atividiade03';

export default function App() {
  return (
    <CalculadoraApp />
  );
}

/*export default function App() {
  return (
    <Atividade03/>
  );
}
*/

/*Atividade 2
export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho 
        nome = 'Naily'
        curso = ' Design Digital '
      />
      <Corpo />

      <Disciplina disciplina = 'PIDM' />
      <Disciplina disciplina = 'PIIV' />
      <Disciplina disciplina = 'CDP' />
    </View>
  );
}
*/
/*Atividade 1
export default function App() {
  return (
    <View style={styles.container}>
      <Imagem />
      <Aluno 
        nome = 'Naily'
        idade = '19 anos'
        local = '4town'
        curso = ' Design Digital '
      />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
