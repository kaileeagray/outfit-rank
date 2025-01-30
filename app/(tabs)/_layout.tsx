import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="rss-feed" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
