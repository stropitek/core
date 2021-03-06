// filters
import invertGetSet from './filter/invertGetSet';
import invertIterator from './filter/invertIterator';
import invertOneLoop from './filter/invertOneLoop';
import invertPixel from './filter/invertPixel';
import invertApply from './filter/invertApply';
import invertBinaryLoop from './filter/invertBinaryLoop';

import invertFilter from './filter/invert';
import flipXFilter from './filter/flipX';
import flipYFilter from './filter/flipY';
import blurFilter from './filter/blurFilter';
import medianFilter from './filter/medianFilter';
import gaussianFilter from './filter/gaussianFilter';
import sobelFilter from './filter/sobelFilter';
import levelFilter from './filter/level';
import addFilter from './filter/add';
import subtractFilter from './filter/subtract';
import hypotenuseFilter from './filter/hypotenuse';
import multiplyFilter from './filter/multiply';
import divideFilter from './filter/divide';
import backgroundFilter from './filter/background';

// transforms
import crop from './transform/crop';
import scale from './transform/scale/scale';
import hsv from './transform/hsv';
import hsl from './transform/hsl';
import cmyk from './transform/cmyk';
import rgba8 from './transform/rgba8';
import grey from './transform/grey';
import mask from './transform/mask/mask';
import pad from './transform/pad';
import resizeBinary from './transform/resizeBinary';
import colorDepth from './transform/colorDepth';

// utility
import setBorder from './utility/setBorder';
import split from './utility/split';
import getChannel from './utility/getChannel';
import combineChannels from './utility/combineChannels';
import setChannel from './utility/setChannel';
import getSimilarity from './utility/getSimilarity';
import getPixelsGrid from './utility/getPixelsGrid';
import getBestMatch from './utility/getBestMatch';
import getRow from './utility/getRow';
import getColumn from './utility/getColumn';
import getMatrix from './utility/getMatrix';
import setMatrix from './utility/setMatrix';
import getPixelsArray from './utility/getPixelsArray';

// operators
import paintMasks from './operator/paintMasks';
import paintPoints from './operator/paintPoints';
import extract from './operator/extract';
import convolution from './operator/convolution';
import convolutionFft from './operator/convolutionFft';

// computers
import {getHistogram, getHistograms} from './compute/histogram';
import getColorHistogram from './compute/colorHistogram';
import getMin from './compute/min';
import getMax from './compute/max';
import getSum from './compute/sum';
import getLocalExtrema from './compute/localExtrema';
import getMean from './compute/mean';
import getMedian from './compute/median';
import getPoints from './compute/points';
import getRelativePosition from './compute/relativePosition';
import getSvd from './compute/svd';
import countAlphaPixels from './compute/countAlphaPixels';

export default function extend(Image) {
    let inPlace = {inPlace: true};
    let inPlaceStack = {inPlace: true, stack: true};
    let stack = {stack: true};

    Image.extendMethod('invertGetSet', invertGetSet, inPlace);
    Image.extendMethod('invertIterator', invertIterator, inPlace);
    Image.extendMethod('invertPixel', invertPixel, inPlace);
    Image.extendMethod('invertOneLoop', invertOneLoop, inPlace);
    Image.extendMethod('invertApply', invertApply, inPlace);
    Image.extendMethod('invert', invertFilter, inPlaceStack);
    Image.extendMethod('invertBinaryLoop', invertBinaryLoop, inPlace);
    Image.extendMethod('level', levelFilter, inPlace);
    Image.extendMethod('add', addFilter, inPlace);
    Image.extendMethod('subtract', subtractFilter, inPlace);
    Image.extendMethod('multiply', multiplyFilter, inPlace);
    Image.extendMethod('divide', divideFilter, inPlace);
    Image.extendMethod('hypotenuse', hypotenuseFilter);
    Image.extendMethod('background', backgroundFilter);
    Image.extendMethod('flipX', flipXFilter);
    Image.extendMethod('flipY', flipYFilter);

    Image.extendMethod('blurFilter', blurFilter);
    Image.extendMethod('medianFilter', medianFilter);
    Image.extendMethod('gaussianFilter', gaussianFilter);
    Image.extendMethod('sobelFilter', sobelFilter);

    Image.extendMethod('crop', crop, stack);
    Image.extendMethod('scale', scale, stack);
    Image.extendMethod('hsv', hsv);
    Image.extendMethod('hsl', hsl);
    Image.extendMethod('cmyk', cmyk);
    Image.extendMethod('rgba8', rgba8);
    Image.extendMethod('grey', grey).extendMethod('gray', grey);
    Image.extendMethod('mask', mask);
    Image.extendMethod('pad', pad);
    Image.extendMethod('resizeBinary', resizeBinary);
    Image.extendMethod('colorDepth', colorDepth);
    Image.extendMethod('setBorder', setBorder, inPlace);

    Image.extendMethod('getRow', getRow);
    Image.extendMethod('getColumn', getColumn);
    Image.extendMethod('getMatrix', getMatrix);
    Image.extendMethod('setMatrix', setMatrix);
    Image.extendMethod('getPixelsArray', getPixelsArray);

    Image.extendMethod('split', split);
    Image.extendMethod('getChannel', getChannel);
    Image.extendMethod('combineChannels', combineChannels);
    Image.extendMethod('setChannel', setChannel);
    Image.extendMethod('getSimilarity', getSimilarity);
    Image.extendMethod('getPixelsGrid', getPixelsGrid);
    Image.extendMethod('getBestMatch', getBestMatch);

    Image.extendMethod('paintMasks', paintMasks, inPlace);
    Image.extendMethod('paintPoints', paintPoints, inPlace);
    Image.extendMethod('extract', extract);
    Image.extendMethod('convolution', convolution);
    Image.extendMethod('convolutionFft', convolutionFft);

    Image.extendMethod('countAlphaPixels', countAlphaPixels);
    Image.extendMethod('getHistogram', getHistogram).extendProperty('histogram', getHistogram);
    Image.extendMethod('getHistograms', getHistograms).extendProperty('histograms', getHistograms);
    Image.extendMethod('getColorHistogram', getColorHistogram).extendProperty('colorHistogram', getColorHistogram);
    Image.extendMethod('getMin', getMin).extendProperty('min', getMin);
    Image.extendMethod('getMax', getMax).extendProperty('max', getMax);
    Image.extendMethod('getSum', getSum).extendProperty('sum', getSum);
    Image.extendMethod('getLocalExtrema', getLocalExtrema);
    Image.extendMethod('getMedian', getMedian).extendProperty('median', getMedian);
    Image.extendMethod('getMean', getMean).extendProperty('mean', getMean);
    Image.extendMethod('getPoints', getPoints).extendProperty('points', getPoints);
    Image.extendMethod('getRelativePosition', getRelativePosition);
    Image.extendMethod('getSvd', getSvd).extendProperty('svd', getSvd);
}
