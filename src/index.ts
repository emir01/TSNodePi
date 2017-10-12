
import { LedNavigationController } from './sense/LedNavigationController';
import * as os from 'os';

class Startup {
    public static main(): number {
        console.log("Started");
        new LedNavigationController().boot();
        return 0;
    }
}

Startup.main();