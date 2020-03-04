import * as Common from './Common';

export default {
    // containers
    introContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100
    },

    // custom width
    customWidth: {
        width: Common.CUR_WIDTH * 0.8
    },
    customTxtWidth: {
        width: Common.CUR_WIDTH * 0.7
    },

    // alignment
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    // buttons
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Common.BLUE,
        width: 300,
        height: 48,
        borderRadius: 24,
        padding: 10,
        marginVertical: 15
    },
    disabledButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Common.BLUE,
        width: 300,
        height: 48,
        borderRadius: 24,
        padding: 10,
        marginVertical: 15,
        opacity: 0.4
    },

    // illustrations
    illus: {
        width: 320, 
        height: 270, 
        resizeMode: 'contain'
    },

    // dots
    dot: {
        width: 11,
        height: 11,
        borderRadius: 6,
        marginLeft: 10,
        marginRight: 10
    }
}