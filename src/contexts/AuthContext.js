import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { auth } from '../firebase'
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)
    const [dataSet, setDataSet] = useState([])
    const token = localStorage.getItem('token')
    const provider = localStorage.getItem('provider')

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.sendEmailVerification();
            auth.signOut();
            alert("Congratulations! Sign-up completed and an email sent. Verify the email and log in with your id and password.")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Opps ${errorCode}! ${errorMessage}`)
        })
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then((result) => {
            if (!result.user.emailVerified) {
                auth.signOut()
                alert("Sorry to said! you have to verify your email first nevertheless you can't enter the dashboard.")
            }
        }).catch((error) => {
            alert(`Opps ${error.code}! ${error.message}`)
        })
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    function socialMedia(provider) {
        return auth.signInWithPopup(provider).then((result) => {
            const credential = result.credential;
            const provider = credential.providerId
            localStorage.setItem('provider', provider);
            const accessToken = credential.accessToken;
            localStorage.setItem('token', accessToken);

        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            // const email = error.email;
            // const credential = error.credential;

            console.log(errorMessage);
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);

        });
        return unsubscribe
    }, []);

    useEffect(() => {
        
        if (token !== null) {
            const URL_ENDPOINT = `https://sumitapi2.herokuapp.com/commits/${token}`;
            if(provider === 'github.com'){
                axios.get(URL_ENDPOINT).then(res => {
                    const resData = res.data;
                    const { data } = resData
                    const parseData = JSON.parse(data)
                    setDataSet(parseData)
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }, [provider, token])

    const newData = dataSet;
    const len = newData.length;
    let Date = []
    let Number = []
    for (var i = 0; i < len; i++) {

        const something = newData[i];
        for (var j = 0; j < something.length - 1; j++) {
            const Jaxis = something[j]
            Date.push(Jaxis)
            // console.log("Date: ",Jaxis);
        }

        for (var z = 1; z < something.length; z++) {
            const Zaxis = something[z]
            Number.push(Zaxis)
            // console.log("Number: ",Zaxis);
        }
    }

    const value = {
        currentUser,
        Date,
        Number,
        provider,
        token,
        socialMedia,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}