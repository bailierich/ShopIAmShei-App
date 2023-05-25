import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import {
  CreateResponsiveStyle,
  DEVICE_SIZES,
  useDeviceSize,
} from "rn-responsive-styles";
import useAuth from "../hooks/useAuth";

const SignUpScreen = () => {
  const styles = useStyles();
  const { signIn } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.contentContainer}>
      <View style={styles.infoContainer}>
        <ImageBackground
          source={require("../assets/IAmShei_logo.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/Group4.png")}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.signUpContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => signIn(email, password)}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Create An Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const useStyles = CreateResponsiveStyle(
  {
    contentContainer: {
      height: "100%",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      borderWidth: 3,
    },
    infoContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#525d3a",
      width: "50%",
      height: "100%",
    },
    signUpContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E6E9DD",
      width: "50%",
      height: "100%",
    },
    inputField: {
      height: 40,
      width: "85%",
      margin: 5,
      borderWidth: 1,
      padding: 9,
      backgroundColor: "white",
      borderRadius: 3,
      borderColor: "transparent",
    },
    button: {
      width: "85%",
      backgroundColor: "#525d3a",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      padding: 10,
      margin: 10,
      borderRadius: 3,
    },
    buttonText: {
      color: "#E6E9DD",
    },
    imageContainer: {
      width: 300,
      height: 352,
    },
    logo: {
      resizeMode: "cover",
      width: "100%",
      height: "100%",
    },
    backgroundImage: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#525d3a",
      width: "100%",
      height: "100%",
    },
  },
  {
    [DEVICE_SIZES.SM]: {
      contentContainer: {
        flexDirection: "column",
      },
      infoContainer: {
        backgroundColor: "#525d3a",
        width: "100%",
        height: "60%",
      },
      signUpContainer: {
        backgroundColor: "#E6E9DD",
        width: "100%",
        height: "40%",
      },
    },
    [DEVICE_SIZES.XS]: {
      contentContainer: {
        flexDirection: "column",
      },
      infoContainer: {
        backgroundColor: "#525d3a",
        width: "100%",
        height: "55%",
      },
      signUpContainer: {
        backgroundColor: "#E6E9DD",
        width: "100%",
        height: "45%",
      },
    },
  }
);
