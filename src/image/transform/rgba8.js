import Image from '../Image';

/**
 * Make a copy of the current image and convert to RGBA 8 bits
 * Those images are the one that are displayed in a canvas.
 * RGB model in 8 bits per channel and containing as well an alpha channel.
 * The source image may be:
 * * a mask (binary image)
 * * a grey image (8 or 16 bits) with or without alpha channel
 * * a color image (8 or 16 bits) with or without alpha channel in with RGB model
 * The conversion is based on {@link Image#getRGBAData}.
 * @memberof Image
 * @instance
 * @returns {Image} - New image in RGB color model with alpha channel
 * @example
 * var rgbaImage = image.rgba8();
 */

export default function rgba8() {
    let newImage = new Image(this.width, this.height, {
        kind: 'RGBA'
    });

    newImage.data = this.getRGBAData();
    return newImage;
}
