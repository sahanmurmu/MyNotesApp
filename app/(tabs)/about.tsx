import { Text, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen() {
  return (
    <LinearGradient
      colors={['#d4fc79', '#96e6a1', '#fbc2eb']}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Sahan's App v1.0 🚀</Text>

        <Text style={styles.subText}>
          Yeh App maine khud banaya hai! 😎
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ed548f',
    marginBottom: 10,
  },

  subText: {
    fontSize: 16,
    color: '#333',
  },
});