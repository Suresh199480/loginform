import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
const Login = () => {
    return ( <
        div className = 'signup-container' >
        <
        div className = 'sign-left' >
        <
        div className = 'images' >
        <
        img src = 'https://tse4.mm.bing.net/th?id=OIP.wn8euRM0iPLJnKr_xovHNgHaIv&pid=Api&P=0'
        alt = ''
        className = 'pic1' / >
        <
        img src = 'https://img.freepik.com/free-photo/apartment-building-city-with-copy-space_23-2148814165.jpg?size=626&ext=jpg&ga=GA1.2.452325600.1644319897'
        alt = ''
        className = 'pic2' / >
        <
        /div> <
        div className = 'texts' >
        <
        div className = 'title' > Discover, Contact and < br / > buy. < /div> <
        div className = 'desc' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Eulsmod aliquam < br / > tempor elit tristique at volupt in ut. < /div>

        <
        ul className = 'lines' >
        <
        li > < /li> <
        li > < /li> <
        li > < /li> <
        /ul> <
        Link to = "#"
        className = 'knowmore-btn' > Know More < /Link> <
        /div> <
        /div> <
        div className = 'sign-right' >
        <
        div className = 'nav-menu' >
        <
        div > Apartment < /div> <
        div > CarpetsTrade < /div> <
        div > Help < /div> <
        div > Signup < /div> <
        div className = 'log-sign-btn' > Login / Signup < /div> <
        /div>

        <
        div className = 'sign-texts' >
        <
        div className = 'sign-heading' > New Here ?
        let 's set up <br/>your account.</div> <
        div className = 'sub-heading' > or sign up with email < /div> <
        /div> <
        div className = 'form-section' >
        <
        form action = '' >
        <
        div className = 'inputwith-icon' >
        <
        input type = "email"
        name = 'email'
        placeholder = 'Email' / >
        <
        i class = "fa-regular fa-envelope" > < /i> <
        /div> <
        div className = 'inputwith-icon' >
        <
        input type = "email"
        name = 'confirm-email'
        placeholder = 'Confirm Email' / >
        <
        i class = "fa-regular fa-envelope" > < /i> <
        /div> <
        div className = 'inputwith-icon' >
        <
        input type = "date"
        name = 'date'
        placeholder = 'Birth Date' / >
        <
        i class = 'far fa-calendar-alt' > < /i> <
        /div> <
        div className = 'inputwith-icon' >
        <
        input type = "password"
        name = 'password'
        placeholder = 'Add a password' / >
        <
        i class = 'fas fa-unlock-alt' > < /i> <
        /div> <
        /form> <
        /div> <
        div className = 'sign-btns' >
        <
        button className = 'btn' > Sign up < /button> <
        button className = 'btn' > Continue with Facebook < /button> <
        i class = "fa-brands fa-facebook" > < /i> <
        button className = 'btn' > Contnue with Google < /button> <
        i class = "fa-brands fa-google" > < /i> <
        /div> <
        p className = 'signup-link' > Don 't have an account?<Link to="#">Signup</Link></p> <
        /div> <
        /div>
    )
}

export default Login