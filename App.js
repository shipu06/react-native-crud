import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Row, Rows, Table } from 'react-native-table-component';
import { colors } from './constants/Colors';

export default function App() {
  const userData = {
    tableHead: ['Name', 'Course', 'Stream', 'marks'],
    tableData: [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
      ['1', '2', '3', '456\n789'],
      ['a', 'b', 'c', 'd']
    ]
  }
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[`${colors.PrimaryColor}`, `${colors.SecondaryColor}`]} style={styles.backgroundGradient}>
        <View>
          <Button title="Add Student" />
        </View>
        <View style={styles.tableContainer}>
          <Text style={styles.tableName}>List of all Student</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={userData.tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={userData.tableData} textStyle={styles.text} />
          </Table>
        </View>
        <StatusBar style="auto" />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundGradient: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    width: '100%'
  },
  buttonContainer: {
    flex: 1
  },
  tableContainer: { flex: 2, padding: 16, paddingTop: 30, width: '100%' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  tableName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 4
  }
});
