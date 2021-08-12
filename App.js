import React, { useState } from "react";
import { View, StatusBar, FlatList, Text, StyleSheet, TextInput } from "react-native";
import styled from "styled-components";
import AddInput from "./Components/AddInput";
import TodoList from "./Components/TodoList";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Empty from "./Components/Empty";
import Header from "./Components/Header";
import { Dimensions } from 'react-native';

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    value.push(lensDiameter)
    // console.log(value)
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  // console.log(data[0].value[3])
  function renderTotal(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum = sum + data[i].value[3] / lensDiameter
    }
    return sum
  }
  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };
  const [lensDiameter, setLensDiameter] = useState(null)
  const [scratchCode, setScratchCode] = useState(null)

  // export { lensDiameter }


  if (fontsLoaded) {
    return (
      <ComponentContainer>
        {/* <View>
          <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
        </View> */}


        <View style={styles.centralise}>

          <View style={styles.flexcontainer}>
            <View style={styles.flexleft}>
              <Text style={styles.textt}>Lens Diameter</Text>
              <TextInput style={styles.inputBox} keyboardType="number-pad" returnKeyType="done" onSubmitEditing={x => setLensDiameter(x.nativeEvent.text)}></TextInput>
            </View>
            <View style={styles.flexright}>
              <Text style={styles.textt}>Scratch Code</Text>
              <TextInput style={styles.inputBox} keyboardType="number-pad" returnKeyType="done" onSubmitEditing={x => setScratchCode(x.nativeEvent.text)}></TextInput>
            </View>
          </View>

          <AddInput submitHandler={submitHandler} />


          <View style={styles.innerflexcontainer}>
            <View style={styles.fl}>
              {/* {data !== null ? */}
              {renderTotal(data) > scratchCode / 2 ?
                <View style={styles.valground}>
                  <Text style={styles.rejectText}>Reject</Text>
                </View>
                :
                <View style={styles.valground}>
                  <Text style={styles.passText}>Pass</Text>
                </View>
              }
              <Text style={styles.textt}>{renderTotal(data)}</Text>
              {/* :
                  <View></View>
                } */}
            </View>
            <View style={styles.fr}>
              <Text style={styles.textt}>R.V [{scratchCode / 2}]</Text>
            </View>
          </View>



          <FlatList
            data={data}
            ListHeaderComponent={() => <Header />}
            ListEmptyComponent={() => <Empty />}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem} />
            )}
          />
        </View>


      </ComponentContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  passText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 30,

  },
  rejectText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,

  },
  sumText: {
    fontSize: 70,
    color: "white",

  },
  valground: {
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    // height: windowHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  flexcontainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "yellow",
    // padding: 10,
    // height: windowHeight * 0.2,
  },
  innerflexcontainer: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    // backgroundColor: "yellow",
    borderRadius: 10,
    margin: 10,
    // height: windowHeight * 0.2,
  },

  flexleft: {
    flex: 0.5,
    // backgroundColor: "black"
  },
  fl: {
    flex: 0.5,
    // backgroundColor: "black"
  },
  fr: {
    flex: 0.5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow"
  },
  flexright: {
    flex: 0.5,
    // backgroundColor: "yellow"
  },
  flexcontainer1: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "yellow",
    // padding: 10,
    // height: windowHeight * 0.2,
  },

  flexleft1: {
    flex: 0.8,
    // backgroundColor: "black"
  },
  flexright1: {
    flex: 0.2,
    // backgroundColor: "yellow"
  },
  inputBox: {
    margin: 10,
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    fontSize: 50,
    // flex: 1,
    alignItems: "center",
    // display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    // width: windowWidth * 0.5,
    // height: windowHeight * 0.05,
  },
  textt: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  centralise: {

    paddingTop: windowHeight * 0.05,
    width: windowWidth * 0.9,
    display: "flex",
    // backgroundColor: "grey",
    justifyContent: "center",
    // alignContent: 'center',
    alignItems: "center",

  }
})

const ComponentContainer = styled.View`
  /* padding: 10; */
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
