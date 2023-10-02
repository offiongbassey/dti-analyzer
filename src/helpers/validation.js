import { validationResult } from "express-validator";
import { responseHandler } from "./responseHandler";

export const checkAllowedFields = (payload, fields) => {
    payload = Array.isArray(payload) ? payload : [payload];

    payload.forEach((item) => {
        const allowed = Object.keys(item).every(field => fields.includes(field));
        fields = typeof fields === 'string' ? fields : fields.join(', ');

        if(!allowed){
            throw new Error(`Wrong field passed. Allowed fields: ${ fields }`);
        }
    })
    return true;
}

export const validationHandler = (values = []) => {
    return async (req, res, next) => {
        await Promise.all(values.map((value) => value.run(req)));

        const errors = validationResult(req);
        if(errors.isEmpty()) {
            return next();
        }
        const _errors = errors.array();
        let message = "Invalid Parameters:";

        _errors.forEach((v) => {
            message += `${ v.param },`;
        });
        responseHandler(res, 422, false, {errors: errors.array() });
    };
};