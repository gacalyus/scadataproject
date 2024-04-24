import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext"
import { standartRegex } from '../../../customfunction/regex';


export default function ForgetPasswordForm() {
    const navigate = useNavigate()
    const { setUser } = useAuth()


    const [formData, setFormData] = useState({ email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validaitonErrors, setValidaitonErrors] = useState({ email: false });
    const [regexValid, setRegexValid] = useState(false);

    const formValidation = () => {
        let newErrors = {
            email: !formData.email
        };
        setValidaitonErrors(newErrors);
        if (Object.values(newErrors).filter((i) => i === true).length > 0) {
            return false;
        } else {
            return true;
        }
    }

    const textLabel = () => {
        if (isSubmitting && validaitonErrors.email) {
            return 'Bu alan zorunludur!'
        } else if (isSubmitting && !regexValid) {
            return 'Lütfen uygun bir e-mail giriniz!'
        } else {
            return null;
        }
    }
    const validate = (value) => {
        const regex = standartRegex.email
        setRegexValid(regex.test(value))
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const isValid = formValidation();
        if (!isValid || !regexValid) return;
        setUser(formData);
    }

    return (
        <Box   >
            <form onSubmit={formSubmit}>
                <TextField
                    name="loginEmail"
                    label="E-mail"
                    type={"email"}
                    inputMode="email"
                    fullWidth
                    id="email"
                    placeholder="Enter Your E-mail"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                        validate(e.target.value)
                        setFormData({ ...formData, email: e.target.value })
                    }}
                    error={isSubmitting && validaitonErrors.email}
                    helperText={textLabel()}
                />


                <Box display="flex" justifyContent="center" my={2}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={formSubmit}
                        fullWidth
                    >
                        Reset Password
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
