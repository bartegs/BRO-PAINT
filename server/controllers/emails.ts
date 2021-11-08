import { Request } from "express";
import { sendMail } from "../utils/mail";

const EmailsController = {
  handle_email_sending: async (req: Request) => {
    const { email, name, message } = req.body;

    sendMail(email, name, message).catch((error) => console.log(error));
  },
};

export default EmailsController;
