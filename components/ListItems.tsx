import { IItem } from "@/interfaces/IScrapping";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import CardItem from "./CardItem";

interface IProps {
  items: IItem[];
}

export default function ListItems({ items }: IProps) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        
        data={items}
        renderItem={({ item }: { item: IItem }) => <CardItem item={item} />}
        keyExtractor={() => Math.random().toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
