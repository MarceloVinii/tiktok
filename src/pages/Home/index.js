import { useRef, useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native"
import styles from "./styles"
import FeedItem from "../../components/FeedItem"

const { height: heightScreen } = Dimensions.get("screen")

export default function Home() {
  let feedItems = [
    {
      id: "1",
      video: "https://i.imgur.com/Cnz1CPK.mp4",
      name: "@sujeitoprogramador",
      description: "Criando o ShortDev do zero com RN",
    },
    {
      id: "2",
      video: "https://i.imgur.com/E0tK2bY.mp4",
      name: "@henriquesilva",
      description:
        "Fala turma, estou aprendendo React Native com sujeito programador",
    },
    {
      id: "3",
      video: "https://i.imgur.com/mPFvFyX.mp4",
      name: "@sujeitoprogramador",
      description: "Aprendendo a trabalhar com Drag and Drop no React Native",
    },
  ]

  const [showItem, setShowItem] = useState(feedItems[0])
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index])
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#DDD" }]}>Seguindo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#FFF" }]}>Pra você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedItems}
        renderItem={({ item }) => (
          <FeedItem data={item} currentVisibleItem={showItem} />
        )}
        onViewableItemsChanged={onViewRef.current}
        snapToAlignment="center"
        snapToInterval={heightScreen}
        scrollEventThrottle={200}
        decelerationRate={"fast"}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100,
        }}
        showVerticalScrollIndicator={false}
      />
    </View>
  )
}
