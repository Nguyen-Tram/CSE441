import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
    },
    input: {
      width: 200,
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
    },
    result: {
      marginTop: 20,
      fontSize: 16,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "600"
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: "400"
    },
    highlight: {
      fontWeight: "700"
    }
  });

export default styles;
