import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
//import Header from './src/Components/Header';

const movieURL="https://reactnative.dev/movies.json";

function App() {
  const [isLoading, setLoading]=useState(true);
  const [data, setData]=useState({});
  const [title, setTitle]=useState({});
  const [description, setDescription]=useState({});
  // const URI = 'http://localhost:8000';

  // export default {
  //     async fetchCoins() {
  //         try {
  //                 let response = await fetch(URI + '/api/coins');
  //                 let responseJsonData = await response.json();
  //                 return responseJsonData;
  //             }
  //         catch(e) {
  //             console.log(e)
  //         }
  //     }
  // }

  useEffect(() => {
    
    fetch('http://127.0.0.1/api/login/data.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.email)
        setTitle(json.password)
        setDescription(json.description);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      {isLoading? (<ActivityIndicator/>): (
        <View>
        <Text style={styles.title}>{title}</Text>
        <View style={{borderBottomWidth:1, marginBottom:12}}></View>
         <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
          <Text style={styles.moviesText}>{item.id}. {item.title}, {item.releaseYear}</Text>
          )}
        />
          <Text style={styles.description}>{description}</Text>
        </View>
  )
      }
    </SafeAreaView>
  )
    }
  
const styles=StyleSheet.create({
  screen:{ 
    flex:1,
    alignItems:"center",
    marginTop:48
  },
  moviesText:{
    fontSize:26,
    fontWeight:"200"
  },
  title:{
    fontSize:32,
    fontWeight:"bold"

  },
  description:{
    textAlign:"center",
    marginBottom:18,
    fontWeight:"200",
    color:"green"
  }
})

export default App

