import React, {useState} from "react";
import  {View,Text, StyleSheet, Image, TouchableOpacity} from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

function App(){
const [num, setNum]= useState(0);
const [parar, setParar]= useState('START');
const [ult, setUltimo] = useState(null);
  function start(){
    if (timer !== null){
      clearInterval(timer);
      timer=null;
      setParar('START');
    }else{
      timer = setInterval(()=>{
        ss++;

        if(ss==60){
          ss=0;
          mm++;
  
        }
  
        if(mm==60){
          mm=0;
          hh++;
        }

        let format = (hh < 10 ? '0' + hh : hh) +':' 
        + (mm < 10 ? '0'+ mm : mm)+ ':'
        +(ss < 10 ? '0' + ss : ss);
        setNum(format);
      },1000)
      setParar('PARAR');
    }


  }

  function zerar(){
    if (timer!==null){
      clearInterval(timer);
      timer = null;

      setParar('START');

    }
    setUltimo(num);
    setNum(0);
    ss=0;
    mm =0;
    hh=0;


  }

  return(
    <View style={styles.container}>
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.timer}>

       {num}
      </Text>

      <View style={styles.bntView}>

        <TouchableOpacity style={styles.bnt} onPress={start}>
          <Text style={styles.bntText}>
            {parar}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bnt} onPress={zerar}>
          <Text style={styles.bntText}>
            LIMPAR
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ultTempo}>
        <Text style={styles.tex1}>
          {ult ? 'Ultimo tempo ' + ult: ''}
        </Text>
      </View>





    </View>


  );
}


const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#00aeef',
    justifyContent: 'center',
    alignItems: 'center'
    
    
  },
  timer:{
    fontSize:45,
    fontWeight:'bold',
    color: '#FFF',
    marginTop:-160
  },
 bntView:{
   flexDirection:'row',
   marginTop:130,
   height:45,

 },
  bnt:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ddd',
    borderRadius:10,
    borderWidth:5,
    height: 40,
    margin: 17,

 },

  bntText:{
    fontSize:20,

  },

  ultTempo:{
    margin:50,
    alignItems:'baseline'
  },

  tex1:{
    fontSize:20,
    
  }





})

export default App;