import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ButtonsSignUps} from '../../../Components/Button';
import {IconButtons} from '../../../Components/IconButton';
import InputText from '../../../Components/TextInput';
import {fetchSpotifyAccessToken} from '../../../Utils/Http/Api';
import {icons} from '../../../Utils/Images';
import {IAuthNavigation} from '../../../Utils/Interface';
import styles from './style';
import {logedIn} from '../../../Utils/Store/redux/Stores';

const Login: FC<IAuthNavigation> = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('parsa@gmail.com');
  const [password, setPassword] = useState<string>('12345678');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const validateInputs = () => {
    const newErrors: {email?: string; password?: string} = {};

    if (!email) {
      newErrors.email = '* Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = '* Password is required';
    } else if (password.length < 6) {
      newErrors.password = '* Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (validateInputs()) {
      let token = await fetchSpotifyAccessToken();
      dispatch(logedIn({access_token: token}));
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <View></View>
        <IconButtons image={icons.login} />
        <Text style={styles.textStyle}>Spotify</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Enjoy Listening To Music</Text>
        </View>

        <View style={styles.textcontainer}>
          <InputText
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.textError}>{errors.email}</Text>}
        </View>
        <View style={styles.textcontainer}>
          <InputText
            placeholder="Enter Your Password"
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && (
            <Text style={styles.textError}>{errors.password}</Text>
          )}
        </View>
        <View style={{marginTop: 30}}>
          <ButtonsSignUps onPress={handleSignUp}>Log In</ButtonsSignUps>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>
            Don't Have an account{' '}
            <Text
              onPress={() => navigation.navigate('Signup')}
              style={{color: '#348d37', textDecorationLine: 'underline'}}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
