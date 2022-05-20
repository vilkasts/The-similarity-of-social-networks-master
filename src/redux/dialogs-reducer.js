const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogData: [
            {id: 1, name: 'Kolyunya'},
            {id: 2, name: 'Vitechka'},
            {id: 3, name: 'Alesyundra'},
            {id: 4, name: 'Nikitiy'},
            {id: 5, name: 'Egoriy'},
            {id: 6, name: 'Alkashiy'},
            {id: 7, name: 'Valeriy'}
        ],
        messageData: [
            {id: 1, message: 'Gamarjoba'},
            {id: 2, message: 'Ho'},
            {id: 3, message: 'Genacvale'}
        ],
        newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messageData: [ ...state.messageData,  { id: 4, message: body }]
            };

        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;