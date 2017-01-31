import Future = require('fibers/future');

export function sleep (millisec:number) {
    const future = new Future<String>();
    setTimeout(() => future.return(null), millisec);
    future.wait();
}
