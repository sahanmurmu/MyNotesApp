import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  // Yeh ek chhota sa switch hai Dark Mode ke liye (Abhi ke liye sirf UI hai)
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <LinearGradient
      colors={['#d4fc79', '#96e6a1', '#fbc2eb']}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings ⚙️</Text>
        </View>

        {/* 👇 SETTINGS KE OPTIONS WALA DABBA 👇 */}
        <View style={styles.card}>
          
          {/* Option 1: Dark Mode Toggle */}
          <View style={styles.optionRow}>
            <View style={styles.optionLeft}>
              <Ionicons name="moon" size={24} color="#ed548f" />
              <Text style={styles.optionText}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={(val) => setIsDarkMode(val)}
              trackColor={{ false: '#d3d3d3', true: '#ed548f' }}
              thumbColor={'#fff'}
            />
          </View>

          {/* Patli si line dono options ke beech */}
          <View style={styles.divider} />

          {/* Option 2: Delete All Notes */}
          <TouchableOpacity style={styles.optionRow}>
            <View style={styles.optionLeft}>
              <Ionicons name="trash" size={24} color="#ff4d4d" />
              <Text style={[styles.optionText, { color: '#ff4d4d' }]}>Delete All Notes</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ff4d4d" />
          </TouchableOpacity>

        </View>
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
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ed548f',
    letterSpacing: 0.5,
  },
  card: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 15,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
  }
});
