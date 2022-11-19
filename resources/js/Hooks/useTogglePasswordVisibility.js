import { useState } from "react";

const useTogglePasswordVisibility = () => {

    const [eye, setEye] = useState(false);
    const [securityPassword, setSecurityPassword] = useState('password');

    const handlePasswordVisibility = () => {
        if(eye === false) {
            setEye(true);
            setSecurityPassword('text');
        } else if (eye === true) {
            setEye(false);
            setSecurityPassword('password');
        }
    }

    return {
        securityPassword,
        eye,
        handlePasswordVisibility
    };
}

export default useTogglePasswordVisibility;
