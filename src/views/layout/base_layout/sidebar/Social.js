import SocialLogin from "react-social-login";

const Button = options => {
    const { children, triggerLogin, ...props } = options;
    return (
        <button onClick={triggerLogin} {...props}>
            {children}
         </button>
    )
}

export default SocialLogin(Button);