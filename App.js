import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisisble, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toLocaleString()}
    ])
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisisble} onAddGoal={addGoalHandler}/>
     <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
              itemData.index
              return <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}/>
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
