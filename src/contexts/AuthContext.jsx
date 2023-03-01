import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword, 
         signOut, 
         sendPasswordResetEmail,
         onAuthStateChanged, 
         updateProfile,
         deleteUser,
         EmailAuthProvider,
         reauthenticateWithCredential,

         } from "firebase/auth";
import { auth, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState({});

    const createUser = (tName, email, password, phone_number, certificationNumber) => {
        return createUserWithEmailAndPassword(auth, tName, email, password, phone_number, certificationNumber);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const uploadPicture = async (file, user, setLoading) => {
        const fileRef = ref(storage, user.uid + '.png');

        setLoading(true);

        const snapshot = await uploadBytes(fileRef, file);

        const photoURL = await getDownloadURL(fileRef);

        updateProfile(user, {photoURL});

        setLoading(false);

        alert("Your profile picture has been uploaded successfully !")
    }

    const deleteSignedUser = async (password) => {
        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            password
        )

        const result = await reauthenticateWithCredential(
            auth.currentUser,
            credential
        )

        await deleteUser(result.user);

        console.log("User deleted successfully");
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, user, signIn, forgotPassword, uploadPicture, deleteSignedUser }}>
            {children}
        </UserContext.Provider>
    )
}   

export const UseAuth = () => {
    return useContext(UserContext);
}