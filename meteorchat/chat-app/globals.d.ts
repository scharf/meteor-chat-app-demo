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
declare module "fibers/future" {
    // see https://github.com/laverdet/node-fibers#api-documentation
    class Future<T> {
        new():Future<T>;
        wait():T;
        'throw'(error:any):void;
        'return'(result:T):void;
    }
    export = Future;
}

declare module SimpleSchemaModule {
    interface SimpleSchemaDefinition {
        [attribute: string]: {[props: string]: any}
    }
    export interface SimpleSchema {
        new(definition: SimpleSchemaDefinition): SimpleSchema;
        extendOptions(options: {[options: string]: any}): void;
        validate(object:any):void;
        clean(object:any):void;
    }

}

declare module 'meteor/aldeed:simple-schema' {
    export var SimpleSchema:{
        new(definition: SimpleSchemaModule.SimpleSchemaDefinition):SimpleSchemaModule.SimpleSchema;
        RegEx: {
            Url: RegExp,
            Email: RegExp
        },
        messages(messages:{[key:string]:string}):void;
    };
}
// this methods added by meteor/aldeed:simple-schema to mongo colletions
declare module "meteor/mongo" {
    export module Mongo {
        export interface Collection<T> {
            attachSchema(schema:SimpleSchemaModule.SimpleSchema):any;
        }
    }
}


declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
