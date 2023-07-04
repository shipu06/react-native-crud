
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Form from './component/Form';
import List from './component/List';


export default function App() {
  [
    { id: 1, name: 'shivam', course: 'B.Tech', stream: 'computer', marks: '50' },
    { id: 2, name: 'anuj', course: 'B Sc', stream: 'computer', marks: '60' }
  ]
  const [screen, setScreen] = useState(<List />);
  const [flag, setFlag] = useState(false);
  const [list, setList] = useState([
    { id: 1, name: 'shivam', course: 'B.Tech', stream: 'computer', marks: '50' },
    { id: 2, name: 'anuj', course: 'B Sc', stream: 'computer', marks: '60' }
  ]);
  useEffect(() => {
    flag ? (
      setScreen(<Form onPress={handleButtonClick} list={list} setList={setList} />))
      : (
        setScreen(<List onPress={handleButtonClick} userData={list} />)
      );
  }, [flag])
  const handleButtonClick = () => {
    flag ? setFlag(false) : setFlag(true);
  }


  return (
    <SafeAreaView style={styles.container}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
