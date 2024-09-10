// Types of Interface

import { Dispatch, ReactNode, SetStateAction } from "react"
import { ColorValue, GestureResponderEvent, ImageSourcePropType } from "react-native"

type TInputText={
    onChangeText?:Dispatch<SetStateAction<string>>
    value?:string
    placeholder?: string
}
type TIMage ={
    image?: number
    onPress?: ((event: GestureResponderEvent) => void)
    source?:ImageSourcePropType
}
type TButton ={
    children?:ReactNode
    icon?:React.ReactNode,
    name?:any
    size?:any
}
type TIcons ={
    icon?:React.ReactNode,
    name?:string
    size?:string
}

export interface IInputText{
    onChangeText?:TInputText
    value?:TInputText
    placeholder?:TInputText
}
export interface IButton{
    children?:string
    image?: number
    onPress?: ((event: GestureResponderEvent) => void)
    source?:ImageSourcePropType
}

export interface IIcon {
    icon?:TIcons
    name?:TIcons
    size?:string
}
export interface IIMage {
    image?: number
    onPress?: ((event: GestureResponderEvent) => void)
    source?:ImageSourcePropType
}

export interface IIonicons{
    name:string,
    size?:number,
    color?:ColorValue
}