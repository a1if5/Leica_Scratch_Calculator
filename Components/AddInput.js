import React, { useState } from "react";
import styled from "styled-components";
import { View, StatusBar, FlatList, Text, StyleSheet, TextInput } from "react-native";

import { AntDesign } from "@expo/vector-icons";
// import { lensDiameter } from "../App.js"
export default function AddInput({ submitHandler }) {
  const [value, setValue] = useState([null, null, null, null]);

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
    var temp = [0, 0, 0, 0]
    temp[0] = value[0]
    temp[1] = text
    temp[2] = value[2]
    // if (value == null) {
    // }
    // else {
    //   temp = value
    // }
    // temp.push(text)
    setValue(temp);
    console.log(value)

  };
  function onChangeText2(text) {
    var temp = [0, 0, 0, 0]
    temp[0] = value[0]
    temp[1] = value[1]
    temp[2] = text
    // if (value == null) {

    // } else {
    //   temp = value
    // }
    // temp.push(text)
    setValue(temp);
    console.log(value)

  };

  function onChangeText(text) {
    var temp = [0, 0, 0, 0]
    // if (value[0] == null) {
    temp[0] = text
    temp[1] = value[1]
    temp[2] = value[2]
    // } else {

    // }

    // if (value == null) {

    // } else {
    //   temp = value
    // }
    // temp.push(text)
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


  // console.log(value + "wooo")
  return (
    <ComponentContainer>

      <InputContainer>
        <Input placeholder="Code" ref={input => { this.textInput = input }} keyboardType="number-pad" returnKeyType="done" onSubmitEditing={x => onChangeText(x.nativeEvent.text)} />
        <Input placeholder="Length" ref={input => { this.textInput1 = input }} keyboardType="number-pad" returnKeyType="done" onSubmitEditing={x => onChangeText1(x.nativeEvent.text)} />
        <Input placeholder="Count" ref={input => { this.textInput2 = input }} keyboardType="number-pad" returnKeyType="done" onSubmitEditing={x => onChangeText2(x.nativeEvent.text)} />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          var temp = []
          var lol = [0, 0, 0, 0]
          if (value == null) {
          } else {
            temp = value
            temp[3] = (parseInt(value[0]) * parseInt(value[1]) * parseInt(value[2]))
            setValue(temp)
            setValue(submitHandler(value));
            setValue(lol)
            // if (this.textInput == null || this.textInput1 == null || this.textInput2 == null) {
            this.textInput.clear()
            this.textInput1.clear()
            this.textInput2.clear()
            // }
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
