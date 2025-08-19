import { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isResetOpen, setIsResetOpen] = useState(false);
    const [isForgotOpen, setIsForgotOpen] = useState(false);

    const [showForgotNewPassword, setShowForgotNewPassword] = useState(false);
    const [showForgotConfirmPassword, setShowForgotConfirmPassword] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1); // Forgot password steps (1=email, 2=otp, 3=new password)

    const nav = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [resetFormData, setResetFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [forgotData, setForgotData] = useState({
        email: "",
        otp: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Load saved login
    useEffect(() => {
        const savedData = localStorage.getItem("loginData");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setFormData(parsedData);
            setIsLoggedIn(true);
        }
    }, []);

    // Handlers
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleResetChange = (e) => {
        setResetFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleForgotChange = (e) => {
        setForgotData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Login submit
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("loginData", JSON.stringify(formData));
        setFormData({ email: "", password: "" });
        setIsPopupOpen(false);
        setIsLoggedIn(true);
    };

    // Reset Password submit
    const handleResetSubmit = (e) => {
        e.preventDefault();
        console.log("Reset Data:", resetFormData);
        setResetFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
        setIsResetOpen(false);
    };

    // Forgot Password submit
    const handleForgotSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            console.log("Email submitted:", forgotData.email);
            setStep(2);
        } else if (step === 2) {
            console.log("OTP submitted:", forgotData.otp);
            setStep(3);
        } else if (step === 3) {
            console.log("New password submitted:", forgotData.newPassword, forgotData.confirmPassword);
            setIsForgotOpen(false);
            setStep(1);
            setForgotData({ email: "", otp: "", newPassword: "", confirmPassword: "" });
        }
    };

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("loginData");
        setIsLoggedIn(false);
        setFormData({ email: "", password: "" });
        nav("/");
    };

    // Body scroll lock
    useEffect(() => {
        if (isPopupOpen || isResetOpen || isForgotOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isPopupOpen, isResetOpen, isForgotOpen]);

    return (
        <>
            <header>
                <nav>
                    <div className="main_title" onClick={() => nav("/")}>
                        <img src="./public/icons/logo.svg" alt="Skill Will Win logo" />
                    </div>

                    {isLoggedIn ? (
                        <div className="dropdown_main" onClick={() => setIsOpen(!isOpen)}>
                            <div className="flex_box">
                                <div className="school_icon_dropdown">
                                    <img src="./public/icons/navbar_school_icon.svg" alt="" />
                                </div>
                                <div className="navbar_school_name_main">
                                    <p className="navbar_school_name">School Name</p>
                                </div>
                                <div className="dropdown_icon">
                                    {isOpen ? (
                                        <img src="./public/icons/dropdown_up_icon.svg" alt="" />
                                    ) : (
                                        <img src="./public/icons/dropdown_down_icon.svg" alt="" />
                                    )}
                                </div>
                            </div>

                            {isOpen && (
                                <div className="dropdown-menu">
                                    <div className="item">
                                        <p
                                            className="dropdown_change_password"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setIsResetOpen(true);
                                            }}
                                        >
                                            Change Password
                                        </p>
                                        <p className="dropdown_logout_password" onClick={handleLogout}>Logout</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button className="navbar_login_button" onClick={() => setIsPopupOpen(true)}>Login</button>
                    )}
                </nav>
            </header>

            {/* Login Popup */}
            {isPopupOpen && (
                <form className="popup_overlay" onSubmit={handleSubmit}>
                    <div className="popup">
                        <div className="login_heading_main">
                            <div className="heading_title">
                                <p>Login into Your Account</p>
                            </div>
                            <div className="close_icon" onClick={() => setIsPopupOpen(false)}>
                                <img src="./public/icons/x-close.svg" alt="" />
                            </div>
                        </div>

                        <p className="info">Please enter your account details</p>
                        <label className="label_for_email">Email Address</label>
                        <div className="input_email_main">
                            <div className="email_icon">
                                <img src="./public/icons/email_icon.svg" alt="" />
                            </div>
                            <div className="input_type_email">
                                <input
                                    type="email"
                                    placeholder="Enter email address..."
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    required
                                />
                            </div>
                        </div>

                        <label className="label_for_email">Password</label>
                        <div className="input_email_main">
                            <div className="email_icon">
                                <img src="./public/icons/password_icon.svg" alt="" />
                            </div>
                            <div className="input_type_email">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password..."
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                    required
                                />
                            </div>
                            <div
                                className="show_password_icon"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                <img
                                    src={
                                        showPassword
                                            ? "./public/icons/showPassword_icon.svg"
                                            : "./public/icons/hide_Password.svg"
                                    }
                                    alt="Toggle password visibility"
                                />
                            </div>
                        </div>

                        <div className="login_button_form">
                            <button type="submit">Login</button>
                        </div>

                        <div className="reset_password">
                            <p>
                                Forgot Password?
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsPopupOpen(false);
                                        setIsForgotOpen(true);
                                    }}
                                >
                                    Reset
                                </a>
                            </p>
                        </div>
                    </div>
                </form>
            )}

            {/* Reset Password Popup */}
            {isResetOpen && (
                <form className="popup_overlay" onSubmit={handleResetSubmit}>
                    <div className="popup">
                        <div className="login_heading_main">
                            <div className="heading_title">
                                <p>Change Your Password</p>
                            </div>
                            <div className="close_icon" onClick={() => setIsResetOpen(false)}>
                                <img src="./public/icons/x-close.svg" alt="" />
                            </div>
                        </div>

                        {/* Current Password */}
                        <label className="label_for_email">Current Password</label>
                        <div className="input_email_main">
                            <div className="email_icon">
                                <img src="./public/icons/password_icon.svg" alt="" />
                            </div>
                            <div className="input_type_email">
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    placeholder="Enter current password..."
                                    name="currentPassword"
                                    onChange={handleResetChange}
                                    value={resetFormData.currentPassword}
                                    required
                                />
                            </div>
                            <div
                                className="show_password_icon"
                                onClick={() => setShowCurrentPassword((prev) => !prev)}
                            >
                                <img
                                    src={
                                        showCurrentPassword
                                            ? "./public/icons/showPassword_icon.svg"
                                            : "./public/icons/hide_Password.svg"
                                    }
                                    alt="Toggle current password visibility"
                                />
                            </div>
                        </div>

                        {/* New Password */}
                        <label className="label_for_email">New Password</label>
                        <div className="input_email_main">
                            <div className="email_icon">
                                <img src="./public/icons/password_icon.svg" alt="" />
                            </div>
                            <div className="input_type_email">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="Enter new password..."
                                    name="newPassword"
                                    onChange={handleResetChange}
                                    value={resetFormData.newPassword}
                                    required
                                />
                            </div>
                            <div
                                className="show_password_icon"
                                onClick={() => setShowNewPassword((prev) => !prev)}
                            >
                                <img
                                    src={
                                        showNewPassword
                                            ? "./public/icons/showPassword_icon.svg"
                                            : "./public/icons/hide_Password.svg"
                                    }
                                    alt="Toggle new password visibility"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <label className="label_for_email">Confirm Password</label>
                        <div className="input_email_main">
                            <div className="email_icon">
                                <img src="./public/icons/password_icon.svg" alt="" />
                            </div>
                            <div className="input_type_email">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm password..."
                                    name="confirmPassword"
                                    onChange={handleResetChange}
                                    value={resetFormData.confirmPassword}
                                    required
                                />
                            </div>
                            <div
                                className="show_password_icon"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                            >
                                <img
                                    src={
                                        showConfirmPassword
                                            ? "./public/icons/showPassword_icon.svg"
                                            : "./public/icons/hide_Password.svg"
                                    }
                                    alt="Toggle confirm password visibility"
                                />
                            </div>
                        </div>

                        <div className="login_button_form">
                            <button type="submit">Change Password</button>
                        </div>
                    </div>
                </form>
            )}

            {/* Forgot Password Popup */}
            {isForgotOpen && (
                <form className="popup_overlay" onSubmit={handleForgotSubmit}>
                    <div className="popup">
                        <div className="login_heading_main">
                            <div className="heading_title">
                                <p>Forgot Password</p>
                            </div>
                            <div className="close_icon" onClick={() => {
                                setIsForgotOpen(false);
                                setStep(1);
                            }}>
                                <img src="./public/icons/x-close.svg" alt="" />
                            </div>
                        </div>

                        {/* Step 1 - Email */}
                        {step === 1 && (
                            <>
                                <label className="label_for_email">Email Address</label>
                                <div className="input_email_main">
                                    <div className="email_icon">
                                        <img src="./public/icons/email_icon.svg" alt="" />
                                    </div>
                                    <div className="input_type_email">
                                        <input
                                            type="email"
                                            placeholder="Enter your email..."
                                            name="email"
                                            onChange={handleForgotChange}
                                            value={forgotData.email}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="login_button_form">
                                    <button type="submit">Send OTP</button>
                                </div>
                            </>
                        )}

                        {/* Step 2 - OTP */}
                        {step === 2 && (
                            <>
                                <label className="label_for_email">Enter OTP</label>
                                <div className="input_email_main">
                                    <div className="email_icon">
                                        <img src="./public/icons/password_icon.svg" alt="" />
                                    </div>
                                    <div className="input_type_email">
                                        <input
                                            type="number"
                                            placeholder="Enter OTP..."
                                            name="otp"
                                            onChange={handleForgotChange}
                                            value={forgotData.otp}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="login_button_form">
                                    <button type="submit">Verify OTP</button>
                                </div>
                            </>
                        )}

                        {/* Step 3 - New Password */}
                        {step === 3 && (
                            <>
                                {/* New Password */}
                                <label className="label_for_email">New Password</label>
                                <div className="input_email_main">
                                    <div className="email_icon">
                                        <img src="./public/icons/password_icon.svg" alt="" />
                                    </div>
                                    <div className="input_type_email">
                                        <input
                                            type={showForgotNewPassword ? "text" : "password"}
                                            placeholder="Enter new password..."
                                            name="newPassword"
                                            onChange={handleForgotChange}
                                            value={forgotData.newPassword}
                                            required
                                        />
                                    </div>
                                    <div
                                        className="show_password_icon"
                                        onClick={() => setShowForgotNewPassword((prev) => !prev)}
                                    >
                                        <img
                                            src={
                                                showForgotNewPassword
                                                    ? "./public/icons/showPassword_icon.svg"
                                                    : "./public/icons/hide_Password.svg"
                                            }
                                            alt="Toggle new password visibility"
                                        />
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <label className="label_for_email">Confirm Password</label>
                                <div className="input_email_main">
                                    <div className="email_icon">
                                        <img src="./public/icons/password_icon.svg" alt="" />
                                    </div>
                                    <div className="input_type_email">
                                        <input
                                            type={showForgotConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm new password..."
                                            name="confirmPassword"
                                            onChange={handleForgotChange}
                                            value={forgotData.confirmPassword}
                                            required
                                        />
                                    </div>
                                    <div
                                        className="show_password_icon"
                                        onClick={() => setShowForgotConfirmPassword((prev) => !prev)}
                                    >
                                        <img
                                            src={
                                                showForgotConfirmPassword
                                                    ? "./public/icons/showPassword_icon.svg"
                                                    : "./public/icons/hide_Password.svg"
                                            }
                                            alt="Toggle confirm password visibility"
                                        />
                                    </div>
                                </div>

                                <div className="login_button_form">
                                    <button type="submit">Change Password</button>
                                </div>
                            </>
                        )}
                    </div>
                </form>
            )}
        </>
    );
};

export default Navbar;



