import { IItem } from "@/interfaces/IScrapping";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

interface IProps {
  item: IItem;
}

export default function CardItem({ item }: IProps) {
  return (
    <Link
      href={{
        pathname: "/[id]",
        params: {
          id: item._id,
        },
      }}
    >
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // flex: 1,
    flexShrink: 1,
  },
  description: {
    fontSize: 12,
    // flex: 1,
    flexShrink: 1,
  },
});
