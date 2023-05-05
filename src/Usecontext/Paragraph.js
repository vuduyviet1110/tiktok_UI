import {ThemeContext} from "./ThemeContext"
import {useContext} from "react"

function Paragraph(){
    const Context = useContext(ThemeContext)
    return (
        <div className={Context.theme}>
            <span>Did i accidentally make you sad?<br />I was so intentive that it hurt you.<br /></span>
        </div>
    )
}
export default Paragraph