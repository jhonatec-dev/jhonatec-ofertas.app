import { ILink } from "@/interfaces/IScrapping";
import { FlatList, SafeAreaView } from "react-native";
import CardLink from "./CardLink";

interface IProps {
  items: ILink[];
}

export default function ListLinks({ items }: IProps) {
  return (
    <SafeAreaView>
      <FlatList
        data={items}
        renderItem={({ item }: { item: ILink }) => <CardLink item={item} />}
        keyExtractor={() => Math.random().toString()}
      />
    </SafeAreaView>
  );
}
