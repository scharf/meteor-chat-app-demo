/// <reference path="types/meteor.d.ts" />
declare module 'meteor/react-meteor-data' {
    interface IReactMeteorData {
        data: any;
    }
    export var ReactMeteorData: IReactMeteorData;
    // param `component:ComponentClass<P>` causes problem if the componet
    // when the component has `static propTypes`
    function createContainer<P>(propsfn: (props: P) => any, component:any): React.ComponentClass<P>;
    export { createContainer };
}
// declare module 'elizabot';
interface ElizaBot {
    getInitial():string;
    getFinal():string;
    reset():void;
    transform(message:string):string;
    memSize:number;
    quit:boolean;
}
declare module 'elizabot' {
    export = class Eliza {
        constructor(weizenbaunExample?:boolean);
        getInitial():string;
        getFinal():string;
        reset():void;
        transform(message:string):string;
        memSize:number;
        quit:boolean;
    }
}
