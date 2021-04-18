
// console.log(ReactDOM)
const domContainer = document.querySelector('#root')
// const div = React.createElement('div', null, [
//     React.createElement('p', null, 'hello react world') ,
//     React.createElement('h1', null, 'hello react world') 
// ])
// const myElement = (
//     <div >
//         <h1 id='display'>0</h1>
//         <div>
//             <button id="button">Increment +</button>
//         </div>

//     </div>
// )
const MyElement = ()=> {
    const [count, setCount] = React.useState(0)
    return (
        <div >
        <h1 id='display'>{count}</h1>
        <div>
            <button id="button" onClick={()=> setCount(count + 1)}>Increment +</button>
        </div>

    </div>
    )
}

// ReactDOM.render(myElement, domContainer)
// ReactDOM.render(myElement(), domContainer)
ReactDOM.render(<div className="container">
<MyElement />
<MyElement />
<MyElement />
</div> ,domContainer)

// let number = 0
// const display = document.querySelector('#display')
// const button = document.querySelector('#button')
// button.addEventListener('click', ()=>{
//     number++
//     display.textContent = number
// })