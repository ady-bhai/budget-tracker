import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  paymentItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
});

const RecurringPayments = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    name: '',
    amount: '',
    frequency: 'monthly',
  });

  const addPayment = () => {
    if (!newPayment.name || isNaN(newPayment.amount) || newPayment.amount <= 0) {
      Alert.alert('Invalid Input', 'Please provide valid payment details.');
      return;
    }
    setPayments([...payments, newPayment]);
    setNewPayment({ name: '', amount: '', frequency: 'monthly' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Payment Name"
          value={newPayment.name}
          onChangeText={(text) => setNewPayment({ ...newPayment, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={newPayment.amount.toString()}
          onChangeText={(text) =>
            setNewPayment({ ...newPayment, amount: text })
          }
        />
        <Button title="Add Payment" onPress={addPayment} />
      </View>
      <FlatList
        data={payments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.paymentItem}>
            <Text style={styles.paymentText}>
              {item.name} - ${item.amount} ({item.frequency})
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default RecurringPayments;
