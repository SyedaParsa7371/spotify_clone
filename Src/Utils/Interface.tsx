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
        name: string,
        size?: number,
        color?: ColorValue | number,
};
type IntialScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'IntialScreen'>;
export type RootStackParamList = {
    IntialScreen: undefined;
    Signup: undefined;
    PlayListScreen: { playlistId: string };
    
    
  };
type PlayScreenNavigationProp=NativeStackNavigationProp<RootStackParamList,'PlayListScreen'>;

export interface IInputText {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  secure?:boolean
}

export interface IButton {
  children?: string;
  image?: number;
  onPress?: ((event: GestureResponderEvent) => void);
  source?: ImageSourcePropType;
}

export interface IIcon {
        name: string,
        size?: number,
        color?: ColorValue | number,
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

export interface ICardTop{
  children?:ReactNode,
  navigation?:any,
  onPress?:any
}
export interface IPlayListNavigation {
  navigation: PlayScreenNavigationProp;
  children?:ReactNode,
}