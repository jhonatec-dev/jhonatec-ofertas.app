import { ILink } from "@/interfaces/IScrapping";
import { Converter } from "@/utils/Converter";
import dayjs from "dayjs";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

interface IProps {
  item: ILink;
}

export default function CardLink({ item }: IProps) {
  return (
    <Link href={item.url}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={{ uri: item.idSeller.logo }} style={styles.image} />
          <Text style={styles.title}>{item.idSeller.name}</Text>
        </View>
        <View style={{ gap: 2 }}>
          <Text style={styles.title}>Preço atual:</Text>
          <Text>{Converter.strToCurrency(item.actualFinalPrice)} à vista</Text>
          <Text>{Converter.strToCurrency(item.actualWholePrice)} a prazo</Text>
          <Text>{dayjs(item.actualPriceDate).format("DD/MM/YYYY")}</Text>
          <Text style={styles.title}>Melhor preço:</Text>
          <Text>{Converter.strToCurrency(item.bestFinalPrice)} à vista</Text>
          <Text>{Converter.strToCurrency(item.bestWholePrice)} a prazo</Text>
          <Text>{dayjs(item.bestPriceDate).format("DD/MM/YYYY")}</Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
  },
});
