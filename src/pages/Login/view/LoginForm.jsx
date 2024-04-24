
import React, { useEffect, useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext"
import { standartRegex } from '../../../customfunction/regex';
import ReCAPTCHA from "react-google-recaptcha"

import { useSelector, useDispatch } from 'react-redux'
import { fetchUSer } from '../../../features/user/usersilice';

export default function LoginForm() {
    const navigate = useNavigate()
    const { setUser } = useAuth()


    const [formData, setFormData] = useState({ password: '', email: '' });
    const [validaitonErrors, setValidaitonErrors] = useState({ password: false, email: false });
    const [regexValid, setRegexValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    let captcha;

    const siteKey = '6LcU4A0oAAAAAO3ATMO5LQz4BzgTyT3e2bTXK5xF';
    // 6LeSV3McAAAAAL1-xfXNoWRiubj_aXfKYxcGFZBz
    const handleClickShowPassword = () => {
        setShowPassword((previousValue) => !previousValue);
    };

    const formValidation = () => {
        let newErrors = {
            email: !formData.email,
            password: !formData.password
        };
        setValidaitonErrors(newErrors);
        if (Object.values(newErrors).filter((i) => i === true).length > 0) {
            return false;
        } else {
            return true;
        }
    }


    const helperLabelEmail = () => {
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
        e.preventDefault()
        setIsSubmitting(true)
        const isValid = formValidation();
        if (!isValid || !regexValid) return;
        console.log(formData);
        if (formData.email == "smartplain@smartplain.com" && formData.password == "smartplain123") {
            setUser(formData)
            dispatch(fetchUSer("https://randomuser.me/api/"))
        }
        else {
            alert("Kullanıcı adı veya parola  hatalı");
        }
    }


    const userGet = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const userInfo = userGet && userGet?.data?.results[0]


    return (
        <Box>
            <form onSubmit={formSubmit}>
                <TextField
                    name="loginEmail"
                    label="E-mail"
                    type="email"
                    inputMode="email"
                    fullWidth
                    id="email"
                    placeholder="Enter Your E-mail"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                        validate(e.target.value)
                        setFormData({ ...formData, email: e.target.value })
                        if (e.target.value !== '') {
                            setValidaitonErrors({ ...validaitonErrors, email: false })
                        }
                    }}
                    error={isSubmitting && validaitonErrors.email}
                    helperText={helperLabelEmail()}
                />

                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Input Your Password"
                    variant="outlined"
                    fullWidth
                    size="small"
                    margin="normal"
                    onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value })
                        if (e.target.value !== '') {
                            setValidaitonErrors({ ...validaitonErrors, password: false })
                        }
                    }}
                    error={isSubmitting && validaitonErrors.password}
                    helperText={isSubmitting && validaitonErrors.password && 'Bu alan zorunludur!'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? (
                                        <VisibilityIcon />
                                    ) : (
                                        <VisibilityOffIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Box id="box-recaptcha" display="flex" justifyContent="center" my={2}>
                    <ReCAPTCHA
                        onChange={(key => console.log(key))}
                        hl='tr'
                        ref={(e) => (captcha = e)}
                        sitekey={siteKey}
                    />
                </Box>

                {userGet.error && userGet.error}
                {userGet.loading && "Loading..."}
                <Box display="flex" justifyContent="center" my={2}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={formSubmit}
                        fullWidth
                    >
                        {isSubmitting ? 'Woo Hoo.' : "Let's Go"}
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
