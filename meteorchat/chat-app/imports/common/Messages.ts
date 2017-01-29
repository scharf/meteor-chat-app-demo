export interface Message {
    _id:string;
    text:string;
    senderName:string;
    avatar:string;
}

const text=`Lorem ipsum dolor sit amet
Consectetur adipiscing elit
Integer molestie lorem at massa
Facilisis in pretium nisl aliquet
Nulla volutpat aliquam velit
Phasellus iaculis neque
Purus sodales ultricies
Vestibulum laoreet porttitor sem, porta lacus fringilla vel. Nulla volutpat aliquam velit. Integer molestie lorem at massa!
Ac tristique libero volutpat at
Faucibus porta lacus fringilla vel
Lorem ipsum dolor sit amet, consectetuer adipiscing elitDonec hendrerit tempor tellus
Donec pretium posuere tellus
Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus, ipsum dolor sit amet, consectetuer adipiscing elitDonec hendrerit tempor tellus
Nulla posuere
Aenean sit amet erat nunc
Eget porttitor lorem`.split(/\n/);

const users=[
    {senderName:'Alexander', avatar:'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/b/b/4/c/thumb_244367948.jpeg'},
    {senderName:'Michael', avatar:'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/7/a/5/0/thumb_109171312.jpeg'}
]

export function getMessages(n=100):Message[] {
    function randomChoice<T>(array:T[]) {
        return array[Math.floor(array.length * Math.random())];
    }
    function message(i:number):Message {
        const user=randomChoice(users);
        return {
            _id:`${i}`,
            text: randomChoice(text)+'.',
            senderName: user.senderName,
            avatar: user.avatar,
        }
    }
    const result:Message[]=[];
    for (var i = 0; i < n; i++) {
        result.push(message(i))

    }
    return result

}
