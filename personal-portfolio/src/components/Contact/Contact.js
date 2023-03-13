import React, { useState, memo } from 'react';
import styles from './Contact.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Fade from 'react-reveal/Fade';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

function Contact({ handleClose }) {
    const [isCopied, setIsCopied] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [isSent, setisSent] = useState(false)

    const handleSubmit = e => {
        setisSent(true)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message })
        })
            .then(() => alert("Thanks for the response.I'll revert back soon!"))
            .catch(error => alert(error));

        e.preventDefault();
    };


    const handleCopy = (e) => {
        setIsCopied(e)
        setTimeout(() => {
            setIsCopied('')
        }, 3000);
    }
    return (
        <Fade duration={2000}>
            <div className={styles.container}>
                <button className={styles.closebtn} onClick={(e) => handleClose(e)}>X</button>
                <div className={styles.contactMe}>
                    <h1>Let's work together:</h1>
                    <div className={styles.itemContainer}>
                        <h3>E-mail : kriteshgaikwad11@gmail.com</h3>
                        <CopyToClipboard text="kriteshgaikwad11@gmail.com">
                            <button onClick={() => handleCopy('email')}>{isCopied === 'email' ? "Copied!" : "Copy"}</button>
                        </CopyToClipboard>
                    </div>
                    <div className={styles.itemContainer}>
                        <h3>Contact no. : 9307417035 </h3>
                        <CopyToClipboard text="9307417035 ">
                            <button onClick={() => handleCopy('number')}>{isCopied === 'number' ? "Copied!" : "Copy"}</button>
                        </CopyToClipboard>
                    </div>
                    <div className={styles.itemContainer}>
                        <h3>linkedIn : <a href={`https://www.linkedin.com/in/kritesh-gaikwad-59b66120a/`} target="_blank" rel="noopener noreferrer">Kirtesh Gaikwad</a></h3>
                        <CopyToClipboard text="https:/www.linkedin.com/in/kritesh-gaikwad-59b66120a/">
                            <button onClick={() => handleCopy('linkedin')}>{isCopied === 'linkedin' ? "Copied!" : "Copy"}</button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className={styles.contactBar}>
                    <a href={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrkFrSLsWCHKjjlsKLjWlLgpTlGcwvdpjLStSvGcvjHmXMZwKlGxjCbzvJvGKzzbTCPMT`} target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-square fa-2x"></i> </a>
                    <a href={`https://www.linkedin.com/in/kritesh-gaikwad-59b66120a`} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
                    <a href={`https://github.com/kirteshreflectiontp`} target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a>
                    <a href={`https://www.instagram.com/_krittessh/`} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x"></i></a>
                </div>
                <h1>Leave a message :</h1>
                <Fade duration={2000}>
                    <div className={styles.formStyle}>
                        <form onSubmit={handleSubmit}>
                            <p>
                                <label>Your Name: <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} /></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} /></label>
                            </p>
                            <p>
                                <label>Your message: <input type="text" name="message" value={message} onChange={(e) => setmessage(e.target.value)}></input></label>
                            </p>
                            <button type="submit" disabled={isSent}>{isSent ? "Sent!" : "Send"}</button>
                        </form>
                    </div>
                </Fade>


            </div>
        </Fade>
    )
}

export default memo(Contact)