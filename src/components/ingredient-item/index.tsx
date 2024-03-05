import { Image, Pressable, PressableProps, Text } from "react-native";

import { styles } from "./styles";

interface IngredientItemProps extends PressableProps {
  name: string;
  image: string;
  selected?: boolean;
}

export function IngredientItem({
  name,
  image,
  selected = false,
  ...rest
}: IngredientItemProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image style={styles.image} />
      <Text style={styles.title}>🍎 {name}</Text>
    </Pressable>
  );
}
