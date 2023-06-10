import { View, Text } from "react-native"
import { Entypo } from "@expo/vector-icons"
import styles from "./styles"

export default function ButtonNew({ size }) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Entypo name="plus" size={size} color="#000" />
      </View>
    </View>
  )
}
