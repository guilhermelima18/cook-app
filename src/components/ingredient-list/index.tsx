import { ScrollView } from "react-native";
import { IngredientItem } from "../ingredient-item";

import { styles } from "./styles";

type IngredientList = {
  ingredientSelected: string[];
  handleIngredientSelected: (ingredient: string) => void;
};

export function IngredientList({
  ingredientSelected,
  handleIngredientSelected,
}: IngredientList) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }).map((item, index) => (
        <IngredientItem
          key={index}
          name="Maça"
          image="Maça"
          selected={ingredientSelected.includes(String(index))}
          onPress={() => handleIngredientSelected(String(index))}
        />
      ))}
    </ScrollView>
  );
}
