import huang from './huang';
import intermodes from './intermodes';
import isodata from './isodata';
import li from './li';
import maxEntropy from './maxEntropy';
import mean from './mean';
import minError from './minError';
import minimum from './minimum';
import moments from './moments';
import otsu from './otsu';
import percentile from './percentile';
import renyiEntropy from './renyiEntropy.js';
import shanbhag from  './shanbhag';
import triangle from './triangle';
import yen from './yen';


export const methods = {
    huang,
    intermodes,
    isodata,
    li,
    maxentropy: maxEntropy,
    mean,
    minerror: minError,
    minimum,
    moments,
    otsu,
    percentile,
    renyientropy: renyiEntropy,
    shanbhag,
    triangle,
    yen
};


export const names = ['threshold'].concat(Object.keys(methods));
