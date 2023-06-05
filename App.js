import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', task: 'User Research & Analysis', completed: true },
    { id: '2', task: 'Black & White Wireframe', completed: true },
    { id: '3', task: 'Design On Figma', completed: false },
  ]);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now().toString(),
        task: task,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',marginBottom: 15}}>Task Details 
      </Text>
      <Text style={{marginBottom: 10,color: '#aaa'}}>Task Title 
      </Text>
      <Text style={styles.title}> NFT Web App Prototype
      </Text>
      <Text style={{marginBottom: 15,color: '#aaa'}}>Desciptions :</Text> 
      <Text style={{color:'black',fontSize: 16,marginBottom: 30}}>Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..</Text>
      <View style={styles.buttonContainer}>
        <Button title="Delete All Tasks" onPress={deleteAllTasks} color={'bluebluevoilet'}/>
      </View>
      <Text style={{marginBottom: 10,color: '#aaa'}}> Task List
      </Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Button
              title={item.completed ? '✓' : ' '}
              onPress={() => toggleTask(item.id)}
              color={item.completed ? '#0dee15' : '#aaa'}
              style={styles.checkbox}
              
            />
            <Text
              style={[
                styles.taskText,
                {
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                  color: item.completed ? '#aaa' : '#333',
                },
              ]}
            >
              {item.task}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Add Task" onPress={addTask} style={styles.but} color="bluevoilet"/>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    // padding: 
  },
  buttonContainer: {
    marginBottom: 30,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 40,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  taskList: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  checkbox: {
    backgroundColor: 'red'
  },
  but:{
    Color:'red'
  }
};

export default App;

