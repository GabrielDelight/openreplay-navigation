import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('Old token', fcmToken);
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, 'The new generated token');
        AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log(error, 'Error raised in fcm token');
    }
  }
};

export const notificationListener = async () => {
  // Listen in background
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  //   Listen in forgorund
  messaging().onMessage(async remoteMessage => {
    console.log('eveived on foreground', remoteMessage);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
