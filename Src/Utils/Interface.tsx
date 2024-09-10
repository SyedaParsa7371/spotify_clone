// Types of Interface

import { NavigationAction } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch, ReactNode, SetStateAction } from "react"
import { ColorValue, GestureResponderEvent, ImageSourcePropType } from "react-native"

type TInputText = {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder: string;
};

type TImage = {
  image?: number;
  onPress?: ((event: GestureResponderEvent) => void);
  source?: ImageSourcePropType;
};

type TButton = {
  children?: ReactNode;
  icon?: React.ReactNode;
  name?: any;
  size?: any;
};

type TIcons = {
  icon?: React.ReactNode;
  name?: string;
  size?: string;
};
type IntialScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'IntialScreen'>;
export type RootStackParamList = {
    IntialScreen: undefined;
    Signup: undefined;
    
  };
export interface IInputText {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
}

export interface IButton {
  children?: string;
  image?: number;
  onPress?: ((event: GestureResponderEvent) => void);
  source?: ImageSourcePropType;
}

export interface IIcon {
  icon?: TIcons;
  name?: TIcons;
  size?: string;
}

export interface IImage {
  image?: number;
  onPress?: ((event: GestureResponderEvent) => void);
  source?: ImageSourcePropType;
  children?:string
}

export interface IIonicons {
  name: string;
  size?: number;
  color?: ColorValue;
}

export interface IAuthNavigation {
    navigation: IntialScreenNavigationProp;
  }