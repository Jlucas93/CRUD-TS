import { MessageTreatment } from '../../interfaces/exportInterfaces'

class MessageTreatments {
    sucessMsg = (msg: string, response?: any): MessageTreatment => {
        let message: MessageTreatment = {
            message: msg,
            sucess: true,
            status: 200,
            response: response
        }
        return message
    }
    infoMsg = (msg: string, response?: any): MessageTreatment => {
        let message: MessageTreatment = {
            message: msg,
            sucess: true,
            status: 250,
            response: response
        }
        return message
    }
    errorMsg = (msg: string, response?: any): MessageTreatment => {
        let message: MessageTreatment = {
            message: msg,
            sucess: false,
            status: 400,
            response: response
        }
        return message
    }
}

export const messageTreatment = new MessageTreatments();