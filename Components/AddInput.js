import React, { useState } from "react";
import styled from "styled-components";
import { View, StatusBar, FlatList, Text, StyleSheet, TextInput } from "react-native";

import { AntDesign } from "@expo/vector-icons";
// import { lensDiameter } from "../App.js"
export default function AddInput({ submitHandler }) {
  const [value, setValue] = useState([]);

  // console.log(lensDiameter)

  // const onChangeText = (text) => {
  //   var temp = []
  //   if (value == null) {

  //   } else {
  //     temp = value
  //   }
  //   temp.push(text)
  //   setValue(temp);
  //   console.log(value)

  // };
  function onChangeText1(text) {
    // console.log(value[1] + "wooo")
    var temp = []
    if (value == null) {

    }
    // else if (value[1].length > 0) {
    //   console.log("wee")
    //   value.splice(value[1], 1)
    //   temp = value
    // }

    else {
      temp = value
    }
    temp.push(text)
    setValue(temp);
    console.log(value)

  };
  function onChangeText2(text) {
    var temp = []
    if (value == null) {

    } else {
      temp = value
    }
    temp.push(text)
    setValue(temp);
    console.log(value)

  };

  function onChangeText(text) {
    var temp = []
    if (value == null) {

    } else {
      temp = value
    }
    temp.push(text)
    setValue(temp);
    console.log(value)

  };

  // function onChangeText4(text) {
  //   var temp = []
  //   if (value == null) {

  //   } else {
  //     temp = value
  //   }
  //   temp.push(text)
  //   setValue(temp);
  //   console.log(value)

  // };


  // console.log(value + "gggg")
  return (
    <ComponentContainer>

      <InputContainer>
        <Input placeholder="Code" keyboardType="number-pad" returnKeyType="done" onSubmitEditing={x => onChangeText(x.nativeEvent.text)} />
        <Input placeholder="Length" keyboardType="number-pad" returnKeyType="done" onSubmitEditing={x => onChangeText1(x.nativeEvent.text)} />
        <Input placeholder="Count" keyboardType="number-pad" returnKeyType="done" onSubmitEditing={x => onChangeText2(x.nativeEvent.text)} />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          var temp = []
          if (value == null) {
          } else {
            temp = value
            temp.push(parseInt(value[0]) * parseInt(value[1]) * parseInt(value[2]))
            setValue(temp)
            setValue(submitHandler(value));
          }
        }}
      >
        <AntDesign name="plus" size={24} color="midnightblue" />
      </SubmitButton>
    </ComponentContainer>
  );
}

const styles = StyleSheet.create({
  sumText: {
    fontSize: 40,
    color: "white",

  },
})
const ComponentContainer = styled.View`
  flex-direction: row;
  margin: 5px;
  /* background-color: blue; */
`;

const InputContainer = styled.View`
  flex-direction: column;
  border-radius: 10px;
  /* background-color: black; */
`;

const Input = styled.TextInput`
  font-family: poppins-regular;
  font-size: 20px;
  background-color: white;
  width: 300px;
  /* align-items: center; */
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 50px;
  margin-bottom: 15px;
  /* background-color: black; */

`;
