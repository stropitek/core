import Image from '../Image';
import {validateChannel} from './../../util/channel';

/**
 * Create a grey image based on the selected channel
 * @memberof Image
 * @instance
 * @param channel
 * @param options
 */
export default function getChannel(channel, {
    keepAlpha = false,
    mergeAlpha = false
} = {}) {

    keepAlpha &= this.alpha;
    mergeAlpha &= this.alpha;

    this.checkProcessable('getChannel', {
        bitDepth: [8, 16]
    });

    channel = validateChannel(this, channel);

    let newImage = Image.createFrom(this, {
        components: 1,
        alpha: keepAlpha,
        colorModel: null
    });
    let ptr = 0;
    for (let j = 0; j < this.data.length; j += this.channels) {
        if (mergeAlpha) {
            newImage.data[ptr++] = this.data[j + channel] * this.data[j + this.components] / this.maxValue;
        } else {
            newImage.data[ptr++] = this.data[j + channel];
            if (keepAlpha) {
                newImage.data[ptr++] = this.data[j + this.components];
            }
        }
    }

    return newImage;
}
