const service = process.env.GMAIL_SERVICE_NAME
const host = process.env.GMAIL_SERVICE_HOST
const secure = process.env.GMAIL_SERVICE_SECURE
const port = process.env.GMAIL_SERVICE_PORT
const userName = process.env.GMAIL_USER_NAME
const userPassword = process.env.GMAIL_USER_PASSWORD

import nodemailer from "nodemailer"

export const sendEmail = ({name, surname, email, message, phone}) => {
    return new Promise((resolve, reject) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service,
            host,
            port,
            secure,
            auth: {
                user: userName,
                pass: userPassword,
            },
        });
        console.log('email', email)
        // send mail with defined transport object
        transporter.sendMail({
            from: `"${name} ${surname}" <${email}>`,
            to: userName,
            subject: `email: ${email} name:${name} surname:${surname} phone:${phone ? phone : '-'}`,
            text: message,
            html: message
        }).then(info=>{
           resolve(info)
        }).catch(error=>{
            console.log('error',error)
            reject(error)
        })
    })

}