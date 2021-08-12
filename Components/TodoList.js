import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { Dimensions } from 'react-native';

export default function TodoList({ item, deleteItem }) {
  return (
    <View style={styles.container}>
      {/* <ListContainer> */}
      <View style={styles.detailsContainer}>

        <DetailsContainer>
          <TextItem>Code: {parseInt(item.value[0])} Length: {parseInt(item.value[1])} Count: {parseInt(item.value[2])} </TextItem>
        </DetailsContainer>
        {/* <TextItem>{item.value[3]} </TextItem> */}

        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="midnightblue" />
        </IconContainer>
      </View>
      {/* </ListContainer> */}
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    margin: 10,

    // backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    // width: windowWidth * 0.9,
  },
  detailsContainer: {
    backgroundColor: "whitesmoke",
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 10,
    borderRadius: 10,
    width: "100%",
  }
})

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const DetailsContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 10px;
  /* background-color: black; */
`;

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  /* height: auto; */
  /* width: 350px; */
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  /* height: auto; */
  /* width: windowWidth*0.9; */
`;

const TextItem = styled.Text`
justify-content: center;
align-items: center;
  /* background-color: black; */
  color: black;
  /* width: 260px; */
  /* height: auto; */
  font-size: 20px;
  /* margin-top: 10px; */
  /* margin-right: 20px; */
  font-family: poppins-regular;
`;

const TextDate = styled.Text`
  color: goldenrod;
  font-size: 15px;
  margin-right: 20px;

  font-family: poppins-regular;
  border-radius: 10px;
  width: 40px;
`;



const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;
