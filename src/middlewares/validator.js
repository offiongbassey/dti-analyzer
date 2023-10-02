import { body } from "express-validator";
import { checkAllowedFields } from "../helpers/validation";
export const dti_analyser = [
    body('income')
        .exists()
        .withMessage("Income is required")
        .notEmpty()
        .withMessage("Income cannot be empty")
        .isInt()
        .withMessage("Income must be a number"),
    body('debt')
        .exists()
        .withMessage("Debt is required")
        .notEmpty()
        .withMessage("Debt cannot be empty")
        .isInt()
        .withMessage("Debt must be a number"),
    body()
        .custom(body => checkAllowedFields(body, ['income', 'debt']))
]