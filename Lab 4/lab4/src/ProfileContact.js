import { View } from "react-native";
import ContactThum from "./ContactThum";
import { IconButton } from "react-native-paper";

const ProfileContact = ({ route }) => {
  const { contact } = route.params;
  const { id, avatar, name, email, phone, cell, favorite } = contact;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThum avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailSection}>
        <div icon="mail" title="Email" subtitle={email} />
        <div icon="phone" title="Work" subtitle={phone} />
        <div icon="smartphone" title="Personal" subtitle={cell} />
        {/*<DetailListIt icon="mail" title="Email" subtitle={email} />*/}
        {/*<DetailListIt icon="phone" title="Work" subtitle={phone} />*/}
        {/*<DetailListIt icon="smartphone" title="Personal" subtitle={cell} />*/}
        <View style={{ alignItems: "center" }}>
          <IconButton
            icon={favorite == true ? "star-check" : "star-check-outline"}
            iconColor="#663399"
            size={20}
            onPress={() => {

            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  detailSection: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ProfileContact;
