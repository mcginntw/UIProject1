//Declaring our component
function Message(){
    const name = null
    if(name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>; //JSX. Curly braces let us add dynamic content
}

export default Message;