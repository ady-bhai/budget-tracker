import * as Notifications from 'expo-notifications';

export const setupNotifications = async () => {
  const permission = await Notifications.requestPermissionsAsync();
  if (!permission.granted) return;

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
};

export const scheduleNotification = async (title, body, trigger) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger,
  });
};