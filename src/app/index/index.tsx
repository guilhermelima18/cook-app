import { useState } from "react";
import { Text, View } from "react-native";
import { IngredientList } from "@/components/ingredient-list";

import { styles } from "./styles";
import { IngredientsSelected } from "@/components/ingredients-selected";

export default function Index() {
  const [ingredientSelected, setIngredientSelected] = useState<string[]>([]);

  function handleIngredientSelected(ingredient: string) {
    if (ingredientSelected.includes(ingredient)) {
      setIngredientSelected((prevIngredient) =>
        prevIngredient.filter((item) => item !== ingredient)
      );
    } else {
      setIngredientSelected((prevIngredient) => [
        ...prevIngredient,
        ingredient,
      ]);
    }
  }

  function handleClearIngredientSelected() {
    setIngredientSelected([]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha{"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos{"\n"}
        produtos que você escolheu.
      </Text>

      <IngredientList
        ingredientSelected={ingredientSelected}
        handleIngredientSelected={handleIngredientSelected}
      />

      <IngredientsSelected
        quantity={ingredientSelected.length}
        onClear={handleClearIngredientSelected}
        onSearch={() => {}}
      />
    </View>
  );
}
