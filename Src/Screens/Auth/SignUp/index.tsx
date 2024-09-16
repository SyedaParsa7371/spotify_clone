import React, { useState } from "react";
import { Text, View } from "react-native";
import Button, { ButtonsLogin, ButtonsLoginss, ButtonsSignUp, ButtonsSignUps } from "../../../Components/Button";
import styles from "./style";
import IconButton, { IconButtons } from "../../../Components/IconButton";
import { icons } from "../../../Utils/Images";
import { FC } from "react";
import { IAuthNavigation } from "../../../Utils/Interface";
import InputText from "../../../Components/TextInput";

const SignUp: FC<IAuthNavigation> = ({ navigation }) => {
  
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});


  const validateInputs = () => {
    const newErrors: { name?: string; email?: string; password?: string } = {};

    if (!name) {
      newErrors.name = "* Name is required";
    }

    if (!email) {
      newErrors.email = "* Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "* Password is required";
    } else if (password.length < 6) {
      newErrors.password = "* Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };


  function updateInputValueHandler(inputType:any,enteredValue:any) {
    switch (inputType){

    }
  }
 
  const handleSignUp = () => {
    if (validateInputs()) {
    
      console.log("Sign up successful");
      navigation.navigate('Login')
   
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
          <InputText placeholder="Enter Your Name" value={name} onChangeText={setName} />
          {errors.name && <Text style={styles.textError}>{errors.name}</Text>}
        </View>
        <View style={styles.textcontainer}>
          <InputText placeholder="Enter Your Email" value={email} onChangeText={setEmail} />
          {errors.email && <Text style={styles.textError}>{errors.email}</Text>}
        </View>
        <View style={styles.textcontainer}>
          <InputText placeholder="Enter Your Password" value={password} onChangeText={setPassword} />
          {errors.password && <Text style={styles.textError}>{errors.password}</Text>}
        </View>
        <View style={{ marginTop: 30 }}>
          <ButtonsSignUps onPress={handleSignUp}>Sign Up</ButtonsSignUps>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
          <Text style={{color:'white',fontSize:20,}}>
            Do You Have an account{' '}
            <Text onPress={() => navigation.navigate('Login')} style={{color:'#348d37',textDecorationLine: 'underline'}}>Log In</Text>
          </Text>
        </View>
        
      </View>
    </View>
  );
};

export default SignUp;
