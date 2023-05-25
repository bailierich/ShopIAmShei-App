import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { CreateResponsiveStyle, DEVICE_SIZES } from "rn-responsive-styles";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";

const ClientHomeScreen = () => {
  //TODO Need to figure out how to upload photo
  const styles = useStyles();
  const [showMenuModal, setShowMenuModal] = useState(false);

  //Sample Data

  const SAMPLEAPPOINTMENTDATA = [
    {
      id: 1,
      imgURL: require("../assets/IMG_2501.jpg"),
      serviceTitle: "Silk Press",
      serviceDate: "Monday, June 7th, 2:30 PM",
      servicePrice: "$85",
    },
    {
      id: 2,
      imgURL: require("../assets/IMG_2501.jpg"),
      serviceTitle: "Silk Press",
      serviceDate: "Monday, June 7th, 2:30 PM",
      servicePrice: "$85",
    },
    {
      id: 3,
      imgURL: require("../assets/IMG_2501.jpg"),
      serviceTitle: "Silk Press",
      serviceDate: "Monday, June 7th, 2:30 PM",
      servicePrice: "$85",
    },
    {
      id: 4,
      imgURL: require("../assets/IMG_2501.jpg"),
      serviceTitle: "Silk Press",
      serviceDate: "Monday, June 7th, 2:30 PM",
      servicePrice: "$85",
    },
  ];

  const Appointment = ({ imgURL, serviceTitle, serviceDate, servicePrice }) => {
    return (
      <View style={styles.servicesContainer}>
        <View style={styles.serviceInfoContainer}>
          <Text style={styles.serviceTitle}>{serviceTitle}</Text>
          <Text style={styles.serviceDate}>{serviceDate}</Text>
          <Text style={styles.servicePrice}>{servicePrice}</Text>
        </View>
        <View style={styles.arrowButton}>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle" size={64} color="#3d452b" />
          </TouchableOpacity>
        </View>
        <View style={styles.serviceImgContainer}>
          <Image style={styles.serviceImg} source={imgURL} />
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <Modal
        style={{ margin: 0 }}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={showMenuModal}
      >
        <View style={styles.menuModalContainer}>
          <View style={styles.menuHeader}>
            <TouchableOpacity onPress={() => setShowMenuModal(!showMenuModal)}>
              <AntDesign name="close" size={48} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.menuItems}>
            <Text style={styles.menuText}>Book An Appointment</Text>
            <Text style={styles.menuText}>Chat With Shei</Text>
            <Text style={styles.menuText}>Policies </Text>
          </View>
          <View style={styles.menuLogo}>
            <Image
              source={require("../assets/Group4.png")}
              style={styles.logoImg}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.NavBarContainer}>
        <View style={styles.profInfoContainer}>
          <Image style={styles.profImg} source={require("../assets/bbr.png")} />
          <Text style={styles.navBarItems}>Client Name </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setShowMenuModal(!showMenuModal)}>
            <Feather name="menu" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.appointmentComponentContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>UPCOMING</Text>
            <Text style={styles.sectionSubTitle}>APPOINTMENTS</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.linkText}>See More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.servicesSectionContainer}>
          <FlatList
            data={SAMPLEAPPOINTMENTDATA}
            renderItem={({ item }) => (
              <Appointment
                imgURL={item.imgURL}
                serviceTitle={item.serviceTitle}
                serviceDate={item.serviceDate}
                servicePrice={item.servicePrice}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
      </View>
      <View>
        <View style={styles.appointmentComponentContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>PREVIOUS</Text>
            <Text style={styles.sectionSubTitle}>APPOINTMENTS</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.linkText}>See More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.servicesSectionContainer}>
          <FlatList
            data={SAMPLEAPPOINTMENTDATA}
            renderItem={({ item }) => (
              <Appointment
                imgURL={item.imgURL}
                serviceTitle={item.serviceTitle}
                serviceDate={item.serviceDate}
                servicePrice={item.servicePrice}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ClientHomeScreen;

const useStyles = CreateResponsiveStyle(
  {
    logoImg: {
      height: 200,
      width: 180,
    },
    menuLogo: {
      position: "absolute",
      bottom: 25,
      left: "20%",
    },
    menuModalContainer: {
      width: "30%",
      height: "100%",
      backgroundColor: "#e5e9dc",
      position: "absolute",
      right: 0,
    },
    menuItems: {
      padding: 16,
    },
    menuText: {
      fontSize: 24,
      marginTop: 16,
      marginBottom: 16,
      fontWeight: "300",
    },
    menuHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      padding: 10,
    },
    servicesSectionContainer: {
      paddingTop: 36,
      paddingBottom: 36,
      backgroundColor: "white",
    },
    sectionHeader: {
      fontSize: 48,
      fontWeight: "bold",
      letterSpacing: 2,
      color: "white",
    },
    sectionSubTitle: {
      fontSize: 24,
      fontWeight: "300",
      letterSpacing: 16,
      color: "#3d452b",
    },
    servicePrice: {
      fontSize: 32,
      fontWeight: "bold",
      marginTop: 10,
      paddingBottom: 8,
    },
    serviceDate: {
      fontSize: 16,
      fontWeight: "500",
    },
    arrowButton: {
      position: "absolute",
      bottom: -20,
      left: 150,
    },
    serviceImgContainer: {
      position: "absolute",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",
      top: 0,
    },
    serviceTitle: {
      fontSize: 32,
      fontWeight: "bold",
    },
    serviceInfoContainer: {
      backgroundColor: "#e5e9dc",
      width: 200,
      paddingTop: 100,
      paddingBottom: 10,
      paddingRight: 20,
      paddingLeft: 20,
      borderRadius: 10,
      marginTop: 75,
    },
    servicesContainer: {
      margin: 16,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    serviceImg: {
      height: 150,
      width: 150,
      borderRadius: 100,
    },
    profImg: {
      height: 100,
      width: 100,
      borderRadius: 100,
    },
    contentContainer: {
      height: "100%",
      padding: 0,
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    linkText: {
      textDecorationLine: "underline",
      fontSize: 16,
    },
    appointmentComponentContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 24,
      alignItems: "center",
      backgroundColor: "#b1bd96",
    },
    appointmentComponentHeader: {},
    NavBarContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 16,
      backgroundColor: "#3d452b",
    },
    profInfoContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
    },
    navBarItems: {
      margin: 8,
      color: "white",
      fontSize: 24,
    },
  },
  {
    [DEVICE_SIZES.XS]: {
      NavBarContainer: {
        paddingTop: 48,
      },
      profImg: {
        height: 75,
        width: 75,
        marginRight: 8,
      },
      sectionHeader: {
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: 2,
      },
      sectionSubTitle: {
        fontSize: 16,
        letterSpacing: 12,
      },
      linkText: {},
      serviceTitle: {
        fontSize: 24,
      },
      menuModalContainer: {
        width: "100%",
        paddingTop: 64,
        paddingRight: 16,
        paddingLeft: 16,
      },
      menuLogo: {
        position: "absolute",
        bottom: 25,
        left: "33%",
      },
      menuItems: {
        marginTop: 48,
      },
      menuText: {
        marginTop: 48,
        marginBottom: 48,
      },
    },
  }
);
