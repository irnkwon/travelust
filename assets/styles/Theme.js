import * as Common from './Common';

export default {
    // containers
    introContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100
    },
    headingContainer: {
        marginTop: 30,
        marginLeft: 30
    },
    subHeadingContainer: {
        marginTop: 30,
        marginBottom: 15,
        marginLeft: 30
    },
    boxContainer: {
        borderWidth: 1, 
        borderColor: Common.LIGHT_GRAY, 
        padding: 20, 
        marginHorizontal: 20, 
        borderRadius: 5,
        marginBottom: 10
    },
    iconContainer: {
        marginLeft: 'auto',
        marginRight: 30
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
    row: {
        flexDirection: 'row',
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