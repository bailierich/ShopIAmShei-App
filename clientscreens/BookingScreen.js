import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";

import {
  CreateResponsiveStyle,
  DEVICE_SIZES,
  useDeviceSize,
} from "rn-responsive-styles";

const BookingScreen = () => {
  const serviceInfo = [
    {
      serviceTitle: "Consultation",
      serviceDesc:
        "Consult: This service is ideal for New Clients. After confirming this service you will receive a consultation form in your email. This will help me get to know your hair before sitting in the chair. You will receive a healthy hair care plan that will include a service schedule as well as suggested products, in-between styling and a few client specific hair tips. THIS IS NOT AN IN SALON SERVICE.",
      servicePrice: 70,
      serviceDuration: 30,
    },
    {
      serviceTitle: "Consultation",
      serviceDesc:
        "Consult: This service is ideal for New Clients. After confirming this service you will receive a consultation form in your email. This will help me get to know your hair before sitting in the chair. You will receive a healthy hair care plan that will include a service schedule as well as suggested products, in-between styling and a few client specific hair tips. THIS IS NOT AN IN SALON SERVICE.",
      servicePrice: 70,
      serviceDuration: 30,
    },
  ];
  const Services = ({
    serviceTitle,
    serviceDesc,
    servicePrice,
    serviceDuration,
  }) => {
    return (
      <View style={styles.serviceContainer}>
        <View style={styles.servicesHeader}>
          <View>
            <Text style={styles.serviceTitle}>{serviceTitle}</Text>
          </View>
          <View style={styles.servicePriceGroup}>
            <Text style={styles.servicePriceGroupText}>
              {serviceDuration} Mins - ${servicePrice}
            </Text>
          </View>
        </View>
        <View>
          <Text>{serviceDesc}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>B O O K</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const styles = useStyles();
  return (
    <View style={styles.contentContainer}>
      <View>
        <View style={styles.contentHeaderImageContainer}>
          <Image
            style={styles.logoImg}
            source={require("../assets/IAmShei_logo-05.png")}
          />
        </View>
        <Text style={styles.policyText}>
          Welcome to the Shei Hair Experience, where your hair goals become
          reality. Shei is a healthy hair stylist who is known for growing 🌱 &
          restoring hair. Shei focuses on natural healthy looking installs & the
          overall health of your hair. Shei really believes in putting the love
          into your hair & seeing it flourish🤎 We look forward to servicing
          you. PLEASE SEE SHOP POLICIES BEFORE BOOKING. Please note there is a
          15.00 Booking fee and a 1.00 processing fee. Deposits are
          non-refundable and non-transferable. *Please note if you have wax in
          your hair I will NOT be able to service you* CASH is our ONLY method
          of payment that we accept.
        </Text>
      </View>
      <View>
        <ScrollView>
          <FlatList
            style={styles.listContainer}
            data={serviceInfo}
            renderItem={({ item }) => (
              <Services
                serviceTitle={item.serviceTitle}
                serviceDesc={item.serviceDesc}
                serviceDuration={item.serviceDuration}
                servicePrice={item.servicePrice}
              />
            )}
          ></FlatList>
        </ScrollView>
      </View>
    </View>
  );
};

export default BookingScreen;

const useStyles = CreateResponsiveStyle({
  contentContainer: {
    height: "100%",
    width: "75%",
    padding: 0,
    margin: 8,
    display: "flex",
  },
  contentHeaderImageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  logoImg: {
    height: 200,
    width: 400,
  },
  listContainer: {
    marginVertical: 16,
  },
  serviceContainer: {
    padding: 16,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#e5e9dc",
    borderRadius: 16,
  },
  servicesHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    width: "100%",
  },
  servicePriceGroup: { display: "flex", flexDirection: "row" },
  servicePriceGroupText: {
    marginLeft: 0,
    fontSize: 16,
    fontWeight: "700",
  },
  serviceTitle: {
    fontSize: 16,
  },

  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 8,
  },
  button: {
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
  },
  policyText: {
    marginHorizontal: 16,
  },
});
