import React, { Component } from 'react'

export const ButtonTheme={
    primary: {
        color: "white",
        background: "#45c496"
    },
    secondary: {
        color: "whitesmoke",
        background: "#d91b42"
    }
}
export const ButtonThemeContext=React.createContext(ButtonTheme.primary);
