import Button from "@/components/Button";
import ListLinks from "@/components/ListLinks";
import VideoModal from "@/components/VideoModal";
import { IItem } from "@/interfaces/IScrapping";
import { MaterialIcons } from "@expo/vector-icons";
import axios, { AxiosError } from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

const API_URL = "http://192.168.1.67:3001/scrapping/item";

export default function ItemDetails() {
  const { id } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState<IItem | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      setItem(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!item) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Item not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.idCategory.name}</Text>
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View
          style={{ flexShrink: 1, gap: 5, justifyContent: "space-between" }}
        >
          <Text>{item.description}</Text>
          {item.urlVideo && (
            <Button
              title='Dicas de compra'
              onPress={() => setShowVideo(true)}
              icon={<MaterialIcons name='play-arrow' size={24} color='white' />}
            />
          )}
        </View>
      </View>
      <ListLinks items={item.links} />
      <VideoModal
        isVisible={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl={item.urlVideo}
      />

      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    // flexWrap: "wrap",
    gap: 5,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  shrink: {
    flexShrink: 1,
  },
});
