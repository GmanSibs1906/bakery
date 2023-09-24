import { generatePreHash, generateSignature } from "./generatePaymentSignature";

const passphrase = ""
   const merchant_id =  ""
   const merchant_key = ""
   const paymentURL = ""

export const handlePayfastSession =  () => {

    

    const process = {
        merchant_id: ,
        merchant_key: ,
        return_url: ``,
        cancel_url: ``,
        notify_url: ``,
        name_first: "",
        email_address: "",
        m_payment_id: "",
        amount: "",
        item_name:"" ,
        item_description: "",
        custom_int1: "",
        custom_str1: "",
        custom_str2: "",
    };

    const encodeURL = paymentURL + '?signature' + generateSignature(process, passphrase) + '&' + generatePreHash(process)
    return{ actionURL : encodeURL }
}

