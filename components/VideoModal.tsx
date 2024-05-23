import { Modal, Platform, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isVisible, onClose, videoUrl }: IProps) {
  return (
    <Modal visible={isVisible} animationType='slide' onRequestClose={onClose} transparent>
      <View style={styles.container}>
        <Text>{videoUrl}</Text>
        {Platform.OS === "web" ? (
          <iframe src={videoUrl} width='100%' height='100%' />
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
    height: "50%",
    position: "absolute",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    backgroundColor: "white",
  },
});