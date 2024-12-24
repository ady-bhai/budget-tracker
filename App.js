import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import your existing components
import DashboardScreen from './DashboardScreen';
import GoalProgress from './GoalProgress';
import SpendingCategories from './SpendingCategories';
import RecurringPayments from './RecurringPayments';
import NetBalanceDisplay from './NetBalanceDisplay';

const Tab = createBottomTabNavigator();

export default function App() {
  // Add some sample data as state
  const [spendingData] = useState([
    {
      name: "Rent",
      amount: 1200,
      color: "#FF6384",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "Food",
      amount: 400,
      color: "#36A2EB",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    }
  ]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Dashboard') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Goals') {
                iconName = focused ? 'flag' : 'flag-outline';
              } else if (route.name === 'Spending') {
                iconName = focused ? 'pie-chart' : 'pie-chart-outline';
              } else if (route.name === 'Payments') {
                iconName = focused ? 'card' : 'card-outline';
              } else if (route.name === 'Balance') {
                iconName = focused ? 'wallet' : 'wallet-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2196F3',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{ headerTitle: 'Dashboard' }}
          />
          <Tab.Screen
            name="Goals"
            component={GoalProgress}
            options={{ headerTitle: 'Savings Goals' }}
            initialParams={{ current: 6000, target: 10000 }}
          />
          <Tab.Screen
            name="Spending"
            component={SpendingCategories}
            options={{ headerTitle: 'Spending Categories' }}
            initialParams={{ spendingData: spendingData }}
          />
          <Tab.Screen
            name="Payments"
            component={RecurringPayments}
            options={{ headerTitle: 'Recurring Payments' }}
          />
          <Tab.Screen
            name="Balance"
            component={NetBalanceDisplay}
            options={{ headerTitle: 'Net Balance' }}
            initialParams={{
              balanceData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{ data: [5000, 6000, 7500, 8000, 8500] }]
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
