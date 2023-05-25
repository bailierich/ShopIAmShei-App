import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  CreateResponsiveStyle,
  DEVICE_SIZES,
  useDeviceSize,
} from "rn-responsive-styles";
import useAuth from "../hooks/useAuth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { AntDesign } from "@expo/vector-icons";

//TODO Create Sign up screen , center it on screen
//TODO Attach this to firebase to create a new user and save data
//* User values: First Name, Last Name, Birthdate, User Image, isStylist, scheduledApts, pastAppointments
const TextInputComp = (props) => {
  <View>
    <Text style={styles.inputLabels}>{props.inputType}</Text>
    <View style={styles.textInput}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor={"lightgray"}
        value={props.val}
        onChangeText={props.setVal}
      />
    </View>
  </View>;
};
const SignUpScreenCont = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [birthdate, setBirthdate] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { user, signUp } = useAuth();

  const validation =
    email &&
    password &&
    confirmPassword &&
    birthdate &&
    phoneNumber &&
    firstName &&
    lastName;
  const passValidation = confirmPassword === password;

  const validateAndCreateUser = () => {
    if (validation) {
      if (passValidation) {
        signUp(email, password);
        addDoc(collection(db, "users"), {
          user: user.uid,
          userCreationDate: "NEED TO ADD",
          email: email,
          phoneNumber: phoneNumber,
          birthdate: birthdate,
        }).catch((e) => console.log(e));
      } else {
        console.log("passwords arent the same, try again! ");
      }
    } else {
      console.log("a field is not filled in, fill it in please");
      //SHOW WHICH FIELDS ARENT FILLED IN -- SHOW MESSEGE ABOVE EACH
    }
  };

  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView>
          <Text style={styles.headerText}>Create An Account</Text>
          <View style={styles.formContainerNames}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabels}>First Name</Text>
              <View style={styles.textInput50}>
                <TextInput
                  placeholder="Jane"
                  placeholderTextColor={"lightgray"}
                  value={firstName}
                  onChangeText={setFirstName}
                ></TextInput>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabels}>Last Name</Text>
              <View style={styles.textInput50}>
                <TextInput
                  placeholder="Doe"
                  placeholderTextColor={"lightgray"}
                  value={lastName}
                  onChangeText={setLastName}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.formContainerContacts}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabels}>Email Address</Text>
              <View>
                <View style={styles.textInput50}>
                  <TextInput
                    placeholder="email@email.com"
                    placeholderTextColor={"lightgray"}
                    value={email}
                    onChangeText={setEmail}
                  ></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabels}>Phone Number</Text>
              <View style={styles.textInput50}>
                <TextInput
                  placeholder="(555)555-5555"
                  placeholderTextColor={"lightgray"}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.formContainerContacts}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabels}>Password</Text>
              <View>
                <View style={styles.textInput50}>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                  ></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabels}>Confirm Password</Text>
              <View style={styles.textInput50}>
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.passValidationMessContainer}>
            <AntDesign
              name="close"
              size={24}
              color="#E6E9DD"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.whiteText}>
              Password Must Have At Least 6 Characters
            </Text>
          </View>
          <View style={styles.formContainerBirthdate}>
            <Text style={styles.inputLabels}>Birthdate</Text>
            <View style={styles.textInput}>
              <TextInput
                placeholder="MM/DD/YYYY"
                placeholderTextColor={"lightgray"}
                value={birthdate}
                onChangeText={setBirthdate}
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={validateAndCreateUser}
          >
            <Text style={styles.whiteText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const useStyles = CreateResponsiveStyle(
  {
    container: {
      margin: "auto",
      width: "75%",
      height: "85%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      padding: 24,
      backgroundColor: "#E6E9DD",
    },
    headerText: {
      fontSize: 24,
      marginTop: 16,
      marginBottom: 16,
      textAlign: "center",
    },
    innerContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "50%",
      padding: 8,
    },
    formContainerPasswords: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    formContainerNames: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    formContainerContacts: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    formContainerBirthdate: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "100%",
      padding: 8,
    },
    textInput50: {
      backgroundColor: "white",
      padding: 8,
      marginTop: 8,
      borderRadius: 4,
    },
    textInput: {
      backgroundColor: "white",
      padding: 8,
      marginTop: 10,
      borderRadius: 4,
    },
    inputLabels: {
      marginTop: 10,
    },
    submitButton: {
      margin: 8,
      marginTop: 30,
      padding: 10,
      backgroundColor: "#3d452b",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      borderRadius: 4,
    },
    passValidationMessContainer: {
      display: "flex",
      flexDirection: "row",

      padding: 8,
      backgroundColor: "#3d452b",
      margin: 8,
      borderRadius: 4,
      alignItems: "center",
    },
    whiteText: {
      color: "white",
    },
  },
  {
    [DEVICE_SIZES.SM]: {
      headerText: {
        fontSize: 24,
        marginTop: 24,
        marginBottom: 16,
        textAlign: "center",
      },
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: 24,
        borderRadius: 2,
      },
      formContainerPasswords: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      },
      formContainerNames: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      },
      formContainerContacts: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      },
      inputContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        padding: 8,
        width: "100%",
      },
      textInput: {
        width: "100%",
      },
    },
    [DEVICE_SIZES.XS]: {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      },
      formContainerPasswords: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      },
      formContainerNames: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      },
      formContainerContacts: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      },
      inputContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        padding: 8,
      },
      textInput: {
        padding: 10,
      },
    },
  }
);
export default SignUpScreenCont;
