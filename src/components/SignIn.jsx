import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native'
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
  };

const SignIn = () => {
    
    const onSubmit = (values) => {
        console.log(values);
      };

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(3, 'Username must be greater or equal to 3')
            .required('Username is required'),
        password: yup
            .string()
            .min(3, 'Password must be greater or equal to 3')
            .required('Password is required')
    })
    const SignInForm = ({ onSubmit }) => {
        return(
        <View style={styles.form}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
            <Pressable onPress={onSubmit}>
                <Text backgroundColor="secondary" style={styles.button} >Submit</Text>
            </Pressable>
        </View>
        )
    }
  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

const styles = StyleSheet.create({
    form: {
      display: 'flex',
      flexDirection:'column',
      padding: 10,
    },
    button: {
        marginVertical: 10,
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'center',
        color: 'white'
    }
  });

export default SignIn;