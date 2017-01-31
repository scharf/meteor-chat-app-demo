import { ReactiveVar } from "meteor/reactive-var";

const reactiveChatRoomId = new ReactiveVar<string>("");

export function getCurrentChatRoomId () {
    return reactiveChatRoomId.get();
}

export function gotoChatRoom (chatRoomId:string) {
    reactiveChatRoomId.set(chatRoomId);
}
