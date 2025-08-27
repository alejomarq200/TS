//Type assetion
let channel: any = 'TypeScript Channel';

let channelConverted = channel as string;
let channelConverted2 = <string>channel;

console.log('Channel length:', channelConverted.length);
console.log('Channel length:', channelConverted2.length);

const myCanvas = document.getElementById('element') as HTMLCanvasElement;
const myCanvas2  = <HTMLCanvasElement>document.getElementById('element') ;