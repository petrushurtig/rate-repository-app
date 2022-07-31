import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a'
  },
  input: {
    marginVertical: 10,
    flexGrow: 1,
    flexShrink: 1,
    borderWidth: 1,
    borderRadius: 3,
    padding: 8,
    fontSize: 20,
    
},
invalidInput: {
    borderColor: '#d73a4a'
},
validInput: {
    borderColor: 'lightgray'
}
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={[styles.input, showError ? styles.invalidInput : styles.validInput]}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;