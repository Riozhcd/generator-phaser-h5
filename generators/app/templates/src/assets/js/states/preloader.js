/**
 * Created by Sanchez
 */
(function() {
    'use strict';
    var Preloader = function() {};

    module.exports = Preloader;

    Preloader.prototype = {
        loadResources: function() {
            // this.load.spritesheet('person1', './assets/img/p2/person1.png', 194, 386, 2);
            // var fData = {
            //     'frames': {

            //         'rollSequence0000.png': {
            //             'frame': { 'x': 483, 'y': 692, 'w': 169, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 3, 'y': 4, 'w': 169, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0001.png': {
            //             'frame': { 'x': 468, 'y': 2, 'w': 169, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 3, 'y': 4, 'w': 169, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0002.png': {
            //             'frame': { 'x': 639, 'y': 2, 'w': 167, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 3, 'y': 5, 'w': 167, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0003.png': {
            //             'frame': { 'x': 808, 'y': 2, 'w': 165, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 3, 'y': 5, 'w': 165, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0004.png': {
            //             'frame': { 'x': 654, 'y': 688, 'w': 161, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 3, 'y': 5, 'w': 161, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0005.png': {
            //             'frame': { 'x': 817, 'y': 458, 'w': 151, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 6, 'y': 5, 'w': 151, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0006.png': {
            //             'frame': { 'x': 817, 'y': 686, 'w': 137, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 11, 'y': 5, 'w': 137, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0007.png': {
            //             'frame': { 'x': 290, 'y': 2, 'w': 113, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 22, 'y': 3, 'w': 113, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0008.png': {
            //             'frame': { 'x': 284, 'y': 692, 'w': 79, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 40, 'y': 3, 'w': 79, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0009.png': {
            //             'frame': { 'x': 405, 'y': 2, 'w': 61, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 53, 'y': 3, 'w': 61, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0010.png': {
            //             'frame': { 'x': 444, 'y': 462, 'w': 49, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 64, 'y': 3, 'w': 49, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0011.png': {
            //             'frame': { 'x': 377, 'y': 462, 'w': 65, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 52, 'y': 3, 'w': 65, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0012.png': {
            //             'frame': { 'x': 272, 'y': 462, 'w': 103, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 37, 'y': 3, 'w': 103, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0013.png': {
            //             'frame': { 'x': 143, 'y': 692, 'w': 139, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 20, 'y': 3, 'w': 139, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0014.png': {
            //             'frame': { 'x': 2, 'y': 462, 'w': 163, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 7, 'y': 3, 'w': 163, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0015.png': {
            //             'frame': { 'x': 2, 'y': 2, 'w': 171, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 2, 'y': 3, 'w': 171, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0016.png': {
            //             'frame': { 'x': 2, 'y': 232, 'w': 163, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 4, 'y': 3, 'w': 163, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0017.png': {
            //             'frame': { 'x': 2, 'y': 692, 'w': 139, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 16, 'y': 3, 'w': 139, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0018.png': {
            //             'frame': { 'x': 167, 'y': 462, 'w': 103, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 35, 'y': 3, 'w': 103, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0019.png': {
            //             'frame': { 'x': 365, 'y': 692, 'w': 65, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 58, 'y': 3, 'w': 65, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0020.png': {
            //             'frame': { 'x': 432, 'y': 692, 'w': 49, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 62, 'y': 3, 'w': 49, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0021.png': {
            //             'frame': { 'x': 389, 'y': 232, 'w': 61, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 61, 'y': 3, 'w': 61, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0022.png': {
            //             'frame': { 'x': 306, 'y': 232, 'w': 81, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 55, 'y': 3, 'w': 81, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0023.png': {
            //             'frame': { 'x': 175, 'y': 2, 'w': 113, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 39, 'y': 3, 'w': 113, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0024.png': {
            //             'frame': { 'x': 167, 'y': 232, 'w': 137, 'h': 228 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 26, 'y': 3, 'w': 137, 'h': 228 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0025.png': {
            //             'frame': { 'x': 664, 'y': 458, 'w': 151, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 18, 'y': 5, 'w': 151, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0026.png': {
            //             'frame': { 'x': 792, 'y': 230, 'w': 161, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 11, 'y': 5, 'w': 161, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0027.png': {
            //             'frame': { 'x': 623, 'y': 230, 'w': 167, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 6, 'y': 5, 'w': 167, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0028.png': {
            //             'frame': { 'x': 495, 'y': 460, 'w': 167, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 5, 'y': 5, 'w': 167, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         },
            //         'rollSequence0029.png': {
            //             'frame': { 'x': 452, 'y': 232, 'w': 169, 'h': 226 },
            //             'rotated': false,
            //             'trimmed': true,
            //             'spriteSourceSize': { 'x': 3, 'y': 4, 'w': 169, 'h': 226 },
            //             'sourceSize': { 'w': 175, 'h': 240 }
            //         }
            //     },
            //     'meta': {
            //         'app': 'http://www.texturepacker.com',
            //         'version': '1.0',
            //         'image': 'fighter.png',
            //         'format': 'RGBA8888',
            //         'size': { 'w': 1024, 'h': 1024 },
            //         'scale': '1',
            //         'smartupdate': '$TexturePacker:SmartUpdate:2f213a6b451f9f5719773418dfe80ae8$'
            //     }
            // };
            // this.load.atlas('fighter', './assets/img/fighter.png', null, fData);

            //video 无法监控
            //webmc
            // this.load.video('pv', './assets/video/pv.mp4');
            // this.load.spritesheet('cloader', './assets/img/qloader.png', 128, 128, 12);
            //p2
            // this.load.image('personall', './assets/img/p2/person_all.png');
            this.load.start();

        },
        drawPieProgress: function(_progress) {
            var that = this;
            that.pgGraphics.clear();
            that.pgGraphics.lineStyle(6, 0x29ABE2);
            that.pgGraphics.arc(this.game.width / 2, 182 + 140, 45, this.game.math.degToRad(270), this.game.math.degToRad(360 * _progress / 100 + 270), false);
            that.pgGraphics.endFill();

        },
        create: function() {
            var that = this;
            that.pgGraphics = this.add.graphics(0, 0);
            this.load.onFileComplete.add(that.onfileComplete, this);
            this.load.onLoadComplete.addOnce(that.onLoadComplete, this);
            this.loadResources();

        },
        onLoadComplete: function() {
            var that = this;
            that.game.state.start('State1');
            return;

        },
        onfileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
            var that = this;
            that.drawPieProgress(progress);
        }
    };

}());