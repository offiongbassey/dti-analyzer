import { responseHandler } from "../helpers/responseHandler";
import { errorHandler } from "../helpers/errorHandler";

export const analyser = async (req, res) => {

    try {
        const dti = 100 / req.body.income * req.body.debt;
        let analysis = {};
            if(dti <= 40){
                analysis = {
                    accredibility: "Yes",
                    dti: `${dti.toFixed(0)}%`,
                    msg: "Congrats! You are qualified for a Loan."
                }
            }else{
                analysis = {
                    accredibility: "NO",
                    dti: `${dti.toFixed(0)}%`,
                    msg: "Sorry! You are not qualified for any Loan."
                }
            }

        return responseHandler(res, 200, true, "DTI successfully analyzed.", analysis );
} catch (error) {
    await errorHandler(error);
    return responseHandler(res, 500, false, "Something went wrong, try again later");
}
}
