import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const[frase, setFrase] = useState('');
  let frases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
  ];

  function quebrarBiscoito(){

    let aleatorio = Math.floor(Math.random() * frases.length)
    setFrase(frases[aleatorio]);
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'));
    setFrase('');
  }
  return(
    
  

    <View style={styles.container}>

    <Image source = {img}
    style={styles.img}
    />

    <Text style={styles.texto}>{frase} </Text>

    <TouchableOpacity style ={styles.btn} onPress={quebrarBiscoito}>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>
          Quebrar Biscoito
        </Text>

      </View>

    </TouchableOpacity>

<TouchableOpacity style ={[styles.btn, {marginTop:15}]} onPress={reiniciarBiscoito}>
  <View style={styles.btnArea}>
    <Text style={styles.btnTexto}>
      Reiniciar
    </Text>

  </View>

</TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
    color: '#ddd',
  },
  img:{
    width: 250,
    height: 200,
  },
  texto:{
    fontSize:20,
    color:'#dd7d66',
    margin: 30,
    fontStyle: 'italic',
    textAlign:'center'
  },
  btn:{
    width: 200,
    height: 50,
    borderColor: '#dd7d22',
    borderWidth: 2,
    borderRadius: 25,


  },
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',

  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color: '#ddd'

  }



});

export default App;