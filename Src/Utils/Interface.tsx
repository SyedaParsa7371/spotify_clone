// Types of Interface

import { Dispatch, ReactNode, SetStateAction } from "react"

type TInputText={
    onChangeText?:Dispatch<SetStateAction<string>>
    value?:string
    placeholder?: string
}
type TButton ={
    children?:React.ReactNode
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
    children?:TButton
}

export interface IIcon {
    icon?:TIcons
    name?TIcons: any
    size?:string
}