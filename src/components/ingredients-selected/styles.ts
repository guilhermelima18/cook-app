import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    padding: 24,
    borderRadius: theme.borderRadius.lg,
    position: "absolute",
    bottom: 24,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 34,
  },
  label: {},
});
