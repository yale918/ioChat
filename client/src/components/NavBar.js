//const React = require("react")
import {Link} from 'react-router-dom'

const navbar = ()=>{
    return(
        <div id='navbar' >
        <div><Link to='/'>Chat</Link></div>
        <div><Link to='/login'>Login</Link></div>
        <div><Link to='/qrcode'>QRC</Link></div>
        <div><Link to='/level'>Level</Link></div>
        <div><Link to='/stream'>Stream</Link></div>
    </div>

    )
}



export default navbar


