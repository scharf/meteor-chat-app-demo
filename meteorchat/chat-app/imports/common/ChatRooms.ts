export interface ChatRoom {
    _id:string;
    name:string;
}

export function getChatRooms(n=5):ChatRoom[] {
    const result:ChatRoom[]=[];
    for (var i = 0; i < n; i++) {
        result.push({
            _id:`${i}`,
            name: `Chat ${i}`,
        });

    }
    return result

}
