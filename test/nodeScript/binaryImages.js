'use strict';

var Image = require('../..');

var img=new Image(16,1,{
    kind: 'BINARY'
});


img.setBitXY(15,0);
img.setBitXY(1,0);

console.log(img.getBitXY(0,0),img.getBitXY(1,0),img.getBitXY(15,0));

img.toggleBitXY(1,0);
img.toggleBitXY(0,0);

console.log(img.getBitXY(0,0),img.getBitXY(1,0),img.getBitXY(15,0));

img.clearBitXY(15,0);


console.log(img.data);

img.invert();

console.log(img.data);

var rgba=img.getRGBAData();

console.log(rgba);