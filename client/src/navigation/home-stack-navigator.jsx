import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import AddTaskScreen from "../screens/addTaskScreen";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  const handleLogout = () => {};
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={handleLogout}
              title="Logout"
              color="#ff0000" // Set the color based on your design
            />
          ),
        }}
      />
      <Stack.Screen name="AddTask" component={AddTaskScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
