import { Pressable, StyleSheet, Text, View } from "react-native";

interface IProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: any;
  fullWidth?: boolean;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
}

export default function Button(props: IProps) {
  const {
    onPress,
    title,
    disabled,
    icon,
    fullWidth,
    iconPosition = "left",
    style,
    ...rest
  } = props;
  return (
    <Pressable onPress={onPress} disabled={disabled} {...rest}>
      <View style={[style, styles.container]}>
        {icon && iconPosition === "left" && icon}
        <Text style={styles.text}>{title}</Text>
        {icon && iconPosition === "right" && icon}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007aff",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    gap: 4,
    width: "100%",
  },
  text: {
    fontSize: 12,
    color: "white",
  },
});
