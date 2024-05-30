import { MaterialIcons } from "@expo/vector-icons";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isVisible, onClose, videoUrl }: IProps) {
  return (
    <Modal
      visible={isVisible}
      animationType='slide'
      onRequestClose={onClose}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>Dicas de compra</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name='close' size={24} color='white' />
          </Pressable>
        </View>
        {Platform.OS === "web" ? (
          <iframe src={videoUrl} style={styles.iframe} />
        ) : (
          <WebView source={{ uri: videoUrl }} />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    height: "70%",
    position: "absolute",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    backgroundColor: "#557aff",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  iframe: {
    width: "100%",
    height: "100%",
    borderWidth: 0,
  },
});
