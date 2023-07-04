
import { useState } from 'react';
import { Button, Modal, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const [list, setList] = useState(['Sholey', 'Dhrishyam']);
  const [flag, setFlag] = useState(false);
  const [movie, setMovie] = useState('');
  const [index, setIndex] = useState(-1);

  const handleDeleteRequest = (index) => {
    const filter = list.filter((item) => list.indexOf(item) !== index);
    setList(filter);
  }

  const handleEditRequest = (index) => {
    handleModalStatus();
    setMovie(list[index]);
    setIndex(index)
  }

  const handleCorrection = () => {
    list.splice(index, 1, movie);
    setList(list)
    handleModalStatus();
    setMovie('');
    setIndex(-1);
  }

  const handleModalStatus = () => {
    flag ? setFlag(false) : setFlag(true);
  }

  const handleInput = (enteredText) => {
    setMovie(enteredText);
  }

  const handleAddRequest = () => {
    setList((currentEle) => [...currentEle, movie]);
    handleModalStatus();
    setMovie('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titlebar}>
        <Text style={styles.title}>Add favorite movie</Text>
      </View>
      <View style={styles.datalist}>
        {
          list.map((item, index) => (
            <View style={styles.moviename} key={index}>
              <Text style={styles.movieText}>{item}</Text>
              <View style={styles.iconContainer}>
                <Icon name="edit" size={30} color="gray" onPress={() => handleEditRequest(index)} />
                <Icon name="trash-o" size={30} color="red" onPress={() => handleDeleteRequest(index)} />
              </View>
            </View>
          ))
        }

      </View>
      <View style={styles.addform}>
        <Icon name="plus-circle" size={30} color="blue" onPress={handleModalStatus} />
        {
          flag ? (
            <Modal >
              <View style={styles.removeIcon}>
                <Icon name="remove" size={30} color="gray" onPress={handleModalStatus} />
              </View>
              <View style={styles.modalScreen}>
                <TextInput placeholder='enter your favorite movie' style={styles.inputFields} value={movie} onChangeText={(enteredText) => handleInput(enteredText)} />
                <View style={styles.buttonContainer}>
                  <Button title='cancel' onPress={handleModalStatus} />
                  <Button title='save' onPress={index > -1 ? handleCorrection : handleAddRequest} />
                </View>
              </View>
            </Modal>
          ) : null
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titlebar: {
    backgroundColor: 'blue',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12,
    marginBottom: 12
  },
  datalist: {
    flex: 8,
    width: '100%',
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 35
  },
  moviename: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingRight: 5,
    marginBottom: 5
  },
  movieText: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    fontSize: 18,
    paddingLeft: 8,
    paddingTop: 5
  },
  iconContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '18%'
  },
  addform: {
    flex: 1
  },
  modalScreen: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: '10%'
  },
  removeIcon: {
    alignItems: 'flex-end',
    height: 50,
    justifyContent: 'center',
    paddingRight: 20
  },
  inputFields: {
    width: '100%',
    borderBottomWidth: 2,
    height: 50,
    borderColor: 'gray'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around'
  }
});
