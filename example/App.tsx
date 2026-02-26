import { useEvent } from "expo";
import AvatarViewModule, { AvatarView } from "@yuborama/avatar-view";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  const onChangePayload = useEvent(AvatarViewModule, "onChange");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Constants">
          <Text>{AvatarViewModule.PI}</Text>
        </Group>
        <Group name="Functions">
          <Text>{AvatarViewModule.hello()}</Text>
        </Group>
        <Group
          name="Views"
          style={{ flexDirection: "row", flexWrap: "wrap", gap: 20 }}
        >
          <AvatarView name="Santiago Lopez" size={50} />
          <AvatarView name="santiago" size={100} />
          <AvatarView name=" ana maria    " size={30} />
          <AvatarView name="juan" size={200} />
        </Group>
        <Group name="Events">
          <Text>{onChangePayload?.value}</Text>
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: {
  name: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.group, { height: "auto" }, props.style]}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#a83f3f",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
};
