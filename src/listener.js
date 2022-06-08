let width
let height

let widthCallback
let heightCallback


const widthHandler = ()=>{
    if(width != window.innerWidth){
        width = window.innerWidth
        widthCallback()
    }
}
const heightHandler = ()=>{
    if(height != window.innerHeight){
        height = window.innerHeight
        heightCallback()
    }
}

const onSizeChange = (specs, _callback)=>{
    
    if (specs.toLowerCase() == 'width'){
        widthCallback = _callback
        setInterval(widthHandler, 100)
    }else if (specs.toLowerCase() == 'height'){
        heightCallback = _callback
        setInterval(heightHandler, 100)
    }else{
        //error message
        console.error(`invalid first parameter:   "${specs}" not recognized.`)
    }
}


export default onSizeChange;