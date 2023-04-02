import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

export type UserType ={
    avatar: string, // можно менять
    name: string  // можно менять
}
export type MessageType2={
    text: string
    time:string
}


// нужно создать правильный тип вместо any
export type MessageType = {
    id:number
    user: UserType
    message: MessageType2
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Ivan',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}
/* сверстал не точно но задача здесь мне понятна,
на верстку ушло много времени, не стал много тратить на это время*/
const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
