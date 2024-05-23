import ListItems from "@/components/ListItems";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

const API_URL = "http://192.168.1.67:3001/scrapping/items";

export default function Index() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        placeholder="Search..."
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          marginBottom: 10,
          width: "80%",
        }}
      />
      {
        items && <ListItems items={items} />
      }
    </View>
  );
}
