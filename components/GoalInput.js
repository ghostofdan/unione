
import {StyleSheet, View, TextInput, Button, Modal } from 'react-native';

import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('');
  }


    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder='Your Course Goals'
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            onPress={addGoalHandler}
                            title='Add Goal' /> 
                    </View>
                    <View style={styles.button}>
                        <Button 
                            onPress={props.onCancel}
                            title='Cancel' /> 
                    </View>
                </View>
            </View>
        </Modal>
        
    )
}





export default GoalInput;

const styles = StyleSheet.create( {
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        padding: 16
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%%',
        padding: 8
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})