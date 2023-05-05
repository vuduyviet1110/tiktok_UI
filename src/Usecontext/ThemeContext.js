import {useState,createContext} from "react"

const ThemeContext =createContext()

function ThemeProvider ({children}) {
    const [theme,setTheme] = useState('darkTheme')
    
    function Toggle() {
        setTheme(theme==="darkTheme"? 'lightTheme' : "darkTheme")
    }
    // Finally this object will be send and wait for recieve
    const value={
        theme,
        Toggle
    }
    // ////////
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
    
}
export { ThemeContext, ThemeProvider }