import React from 'react';
import axios from 'axios';

export default function Registration(){

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("");

    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");

    const [loggedInStatus, setLoggedInStatus] = React.useState(false);

    React.useEffect(()=>{
        setLoggedInStatus(localStorage.getItem('IS_LOGGED_IN') === 'TRUE');
        console.log('Checked logged in status from local storage');
    }, [loggedInStatus]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handlePasswordConfirmationChange = (event) => {
        setPasswordConfirmation(event.target.value);
    }

    const handleLoginEmailChange = (event) => {
        setLoginEmail(event.target.value);
    }

    const handleLoginPasswordChange = (event) => {
        setLoginPassword(event.target.value);
    }

    const handleLogout = () => {
        setLoggedInStatus(false);
        localStorage.removeItem('IS_LOGGED_IN');
        localStorage.removeItem('AUTH_REFRESH_TOKEN');
        localStorage.removeItem('AUTH_ACCESS_TOKEN');
    }

    const postReq = {
        "email": email,
        "password": password,
        "username": email,
        "profile": {
            "country": "NZ",
            "institution": "TUM"
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting: ' + email + " " + password)
        console.log(postReq);
        axios.post(
            "/api/users/",
            postReq,
            {withCredentials: true}
        ).then(response => {
            console.log(response);
        })
        
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log([loginEmail, loginPassword]);
        
        const request = {       
            email: loginEmail,
            password: loginPassword
        }

        axios.post(
            "/api/token/",
            request,
            {withCredentials: true}
        ).then(response => {
            console.log(response);
            
            let refreshToken = response.data.refresh;
            let accessToken = response.data.access;

            localStorage.setItem('AUTH_REFRESH_TOKEN', JSON.stringify(refreshToken));
            localStorage.setItem('AUTH_ACCESS_TOKEN', JSON.stringify(accessToken));
            localStorage.setItem('IS_LOGGED_IN', 'TRUE');

            setLoggedInStatus(true);

        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <div>{/* sign-up part */}
                <h1>Home</h1>
                {loggedInStatus
                    ? <h2>LOGGED IN</h2>
                    : <h2>NOT LOGGED IN</h2>
                }   
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />

                    <input
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Password Confirmation"
                        value={passwordConfirmation}
                        onChange={handlePasswordConfirmationChange}
                        required
                    />
                    
                    <button type="submit">Register</button>
                </form>
            </div>

            <div> {/* sign-in part */}
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        name="loginEmail"
                        placeholder="Email"
                        value={loginEmail}
                        onChange={handleLoginEmailChange}
                    />

                    <input
                        type="password"
                        name="loginPassword"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={handleLoginPasswordChange}

                    />

                    <button type="submit">Login</button>
                </form>

                <button onClick={handleLogout}>Logout</button>  
            </div>
        </div>
    )
}