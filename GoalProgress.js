import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalProgress = ({ current = 0, target = 0 }) => {
  const progressPercentage = (current / target) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Goal Progress</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progressPercentage}%` }]} />
      </View>
      <Text style={styles.progressText}>
        ${current.toLocaleString()} of ${target.toLocaleString()} goal
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressBar: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default GoalProgress;