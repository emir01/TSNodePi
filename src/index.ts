import * as os from 'os';

class Startup {
    private static delay:number = 1000;

    public static main(): number {
        setInterval(Startup.doSomething, Startup.delay);
        return 0;
    }
    
    private static doSomething(){
        console.log(os.loadavg()[0]);
    }
}

Startup.main();