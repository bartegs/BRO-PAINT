import { Request } from "express";
import { sendEmail } from "../utils/email";

const EmailsController = {
  handle_email_sending: async (req: Request) => {
    const { email, name, message } = req.body;
    sendEmail(email, name, message).catch((error) => console.log(error));
  },
};

export default EmailsController;
