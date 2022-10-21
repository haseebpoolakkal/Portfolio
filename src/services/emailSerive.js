import axios from 'axios';
const URL = 'https://us-central1-portfolio-92097.cloudfunctions.net/sendMail';

export const sendEmail = async ({name, email, subject, message}) => {
    const mail = {
        email: email,
        subject: `${name} - ${subject}`,
        body: message
    }
    try {
        let response = await axios.post(URL, mail);
        console.log(response.data)
        return response.data;
    }
    catch(error) {
        console.log(error.message)
        return error.message;
    }
}