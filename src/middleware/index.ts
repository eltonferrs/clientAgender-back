import { handleErrors } from "./handleErrors.middlewares";
import { validBody } from "./validBody.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { validToken } from "./validToken.middleware";
import { verify } from "./clientToken.middleware";

export default { handleErrors, validBody, uniqueEmail, validToken, verify}