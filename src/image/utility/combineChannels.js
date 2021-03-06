import Image from '../Image';

/**
 * Create a new grey Image by combining the channels of the current image.
 * @memberof Image
 * @instance
 * @param {function} method
 * @param {object} options
 * @param {string} [options.alpha='skip'] - possible values: 'skip', 'keep', 'join'
 */
export default function combineChannels(
    method = function (pixel) {
        return (pixel[0] + pixel[1] + pixel[2]) / 3;
    }, {
        mergeAlpha = false,
        keepAlpha = false
    } = {}
) {

    mergeAlpha &= this.alpha;
    keepAlpha &= this.alpha;

    this.checkProcessable('combineChannels', {
        bitDepth: [8, 16]
    });

    let newImage = Image.createFrom(this, {
        components: 1,
        alpha: keepAlpha,
        colorModel: null
    });

    let ptr = 0;
    for (let i = 0; i < this.size; i++) {
        // TODO quite slow because we create a new pixel each time
        let value = method(this.getPixel(i));
        if (mergeAlpha) {
            newImage.data[ptr++] = value * this.data[i * this.channels + this.components] / this.maxValue;
        } else {
            newImage.data[ptr++] = value;
            if (keepAlpha) {
                newImage.data[ptr++] = this.data[i * this.channels + this.components];
            }
        }
    }

    return newImage;
}
