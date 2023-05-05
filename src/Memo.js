import { memo } from "react"



// Moral of the story is:
// Nếu dùng react memo cho component con thì 
// nếu truyền thêm props vào thì nên 
// function dùng usecallback để không bị re-render

function Memo({onIncrease}){
    console.log('re-render')

    return (
        <>
            <h1>Hello World </h1>
            <button onClick={onIncrease}>Click to up</button>
        </>
    )
}
export default memo(Memo)