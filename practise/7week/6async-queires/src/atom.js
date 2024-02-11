import {atom, selector} from 'recoil'

export const notification = atom({
    key:"notificationAtom",
    default : {
        network : 0,
        jobs : 0,
        messaging : 0,
        notifications : 0,
    }
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get : ({get}) => {
        const allNotifications = get(notification)
        return  allNotifications.network +
        allNotifications.jobs +
        allNotifications.messages +
        allNotifications.notifications
    }
})