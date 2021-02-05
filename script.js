var editor = grapesjs.init({
    height: '100%',
    // showOffsets: 1,
    // noticeOnUnload: 0,
    // avoidInlineStyle: 1,
    // storageManager: { autoload: 0 },
    container: '#gjs',
    // fromElement: true,
    styleManager: {
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        }, {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'flex-width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
            properties: [{
                id: 'flex-width',
                type: 'integer',
                name: 'Width',
                units: ['px', '%'],
                property: 'flex-basis',
                toRequire: 1,
            }]
        }, {
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        }]
    },

    plugins: [
        'gjs-blocks-flexbox'
    ],
    pluginsOpts: {
        'gjs-blocks-flexbox': {}
    },

    assetManager: {
        assets: [
            { type: 'image', src: 'http://placehold.it/350x250/78c5d6/fff/image1.jpg?text=GrapesJS', height: 350, width: 250, name: 'Image1' },
            { type: 'image', src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg?text=GrapesJS', height: 350, width: 250, name: 'Image2' },
            { type: 'image', src: 'http://placehold.it/350x250/79c267/fff/image3.jpg?text=GrapesJS', height: 350, width: 250, name: 'Image3' },
            { type: 'image', src: 'http://placehold.it/350x250/c5d647/fff/image4.jpg?text=GrapesJS', height: 350, width: 250, name: 'Image4' },
            { type: 'image', src: 'http://placehold.it/350x250/f28c33/fff/image5.jpg?text=GrapesJS', height: 350, width: 250, name: 'Image5' },
            { type: 'image', src: 'http://placehold.it/350x250/e868a2/fff/image6.jpg?text=GrapesJS', height: 350, width: 250, name: 'Image6' },
            { type: 'image', src: 'http://placehold.it/350x250/cc4360/fff/image7.jpg?text=GrapesJS', height: 350, width: 250, name: 'Image7' },
        ]
    },
});