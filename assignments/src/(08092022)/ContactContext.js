import { createContext } from "react";

const ContactContext = createContext({mobilenumber:'test', setMobileNumber:() => {}});

export default ContactContext;