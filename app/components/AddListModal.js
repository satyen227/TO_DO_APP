import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../Colors";

export default class AddListModal extends Component {
  backgroundColors = [
    Colors.blue,
    Colors.lightBlue,
    Colors.darkBlue,
    Colors.teal,
    Colors.green,
    Colors.lightGreen,
    Colors.purple,
    Colors.darkPurple,
    Colors.red,
    Colors.pink,
    Colors.orange,
    Colors.yellow,
  ];
  state = {
    name: "",
    color: Colors.blue,
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32 }}
          onPress={this.props.closeModal}
        >
          <AntDesign name="close" size={24} color={Colors.black} />
        </TouchableOpacity>
        <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
          <Text style={styles.title}>Create Todo List</Text>
          <TextInput
            style={styles.input}
            placeholder="List Name?"
            onChangeText={() => this.setState({ name: text })}
          />
          <TouchableOpacity
            style={[styles.create, { backgroundColor: Colors.blue }]}
          >
            <Text style={{ color: Colors.white, fontWeight: "600" }}>
              Create!
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
