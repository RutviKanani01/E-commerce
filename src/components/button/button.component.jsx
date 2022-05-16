import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles";

const getButton = (buttonType) =>{
    switch(buttonType) {
        case 'base': return BaseButton;
        case 'google': return GoogleSignInButton;
        case 'inverted': return InvertedButton;
        default : return BaseButton;
    }
}


export const Button = ({ children, buttonType, ...otherProps }) => {

    const CustomButton = getButton(buttonType);
    console.log(CustomButton,"===========")
    return (<CustomButton {...otherProps}>{children}</CustomButton>);
};

