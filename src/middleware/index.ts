import { handleErrors } from "./handleErrors.middlewares";
import { validBody } from "./validBody.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { validToken } from "./validToken.middleware";
import { verifyClient } from "./clientToken.middleware";
import { verifyContact } from "./contactToken.middleware";

export default { handleErrors, validBody, uniqueEmail, validToken, verifyClient, verifyContact}