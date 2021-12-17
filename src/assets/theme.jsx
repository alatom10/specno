import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    // "palette": {
    //     "background": {
    //         "default": "#FBF7F7",
    //         "paper": "#EFEDED"
    //     }
    // }
    "palette": {
        "background": {
            "default": "#fafafa",
            "paper": "#fff"
        },
        "type": "light",
        "divider": "rgba(0, 0, 0, 0.12)",
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)"
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.04)",
            "selected": "rgba(0, 0, 0, 0.08)",
            "disabled": "rgba(0, 0, 0, 0.26)a",
            "disabledBackground": "rgba(0, 0, 0, 0.12)"
        },
        "primary": {
            "main": "rgba(200, 41, 41, 0.98)"
        },
        "secondary": {
            "main": "#0A0A0A",
            "light": "#120F10",
            "dark": "#282125"
        }
    },
    "breakpoints": {
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 1000,
            "lg": 1280,
            "xl": 1920
        }
    }
});

export default theme;

