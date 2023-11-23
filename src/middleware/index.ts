import { handleErrors } from "./handleErrors.middlewares";
import { validBody } from "./validBody.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";

export default { handleErrors, validBody, uniqueEmail}