var sense = require("sense-hat-led");
var senseJoystick = require('sense-joystick');

import { Colors } from '../constants/colors';
import { Keys } from '../constants/keys';

export class LedRandomController {
    private ledIsActive: boolean = false;
    private colorService = new Colors();

    private setLed(color: Array<number>) {
        sense.clear(color);
    }

    public boot() {
        senseJoystick.getJoystick()
            .then((joystick: any) => {
                joystick.on('press', (direction: any) => {
                    console.log('Got button press in the direction: ', direction);
                    switch (direction) {
                        case Keys.Up:
                            this.ledIsActive = true;
                            this.setLed(this.colorService.GetRandomColor());
                            break;

                        case Keys.Down:
                            this.ledIsActive = false;
                            this.setLed(Colors.Off);
                            break;

                        case Keys.Left:
                            if (this.ledIsActive) {
                                this.setLed(this.colorService.GetRandomColor());
                            }
                            break;

                        case Keys.Right:
                            if (this.ledIsActive) {
                                this.setLed(this.colorService.GetRandomColor());
                            }
                            break;

                        default:
                            this.ledIsActive = false;
                            this.setLed(Colors.Off);
                            break;
                    }
                });
            });
    }
}