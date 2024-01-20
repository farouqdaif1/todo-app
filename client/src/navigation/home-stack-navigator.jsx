import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import HomeScreen from "../screens/homeScreen";
import AddTaskScreen from "../screens/addTaskScreen";
import { Button, View } from "react-native";
import { logout } from "../../store/actions/authActions";

const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Button
                onPress={handleLogout}
                title="Logout"
                color="#ff0000"
              />
            </View>
          ),
        }}
      />
      <Stack.Screen name="AddTask" component={AddTaskScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
