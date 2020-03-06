import * as Common from './Common';

export default {
    // containers
    introContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
        backgroundColor: Common.WHITE
    },
    authContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 45,
        backgroundColor: Common.WHITE
    },
    appContainer: {
        flex: 1,
        backgroundColor: Common.WHITE
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
    labelContainer: {
        backgroundColor: Common.BLUE,
        borderRadius: 4,
        width: 80,
        paddingVertical: 2,
        marginBottom: 5
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
    smallButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Common.BLUE,
        width: 150,
        height: 48,
        borderRadius: 24,
        padding: 10,
        marginVertical: 15
    },
    longButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Common.BLUE,
        width: 335,
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

    // images
    illus: {
        width: 310, 
        height: 260, 
        resizeMode: 'contain'
    },
    icons: {
        width: 80, 
        height: 80, 
        resizeMode: 'contain'
    },
    logo: {
        width: 190,
        height: 90,
        resizeMode: 'contain',
        marginBottom: 20
    },
    pics: {
        width: 300,
        height: 360,
        resizeMode: 'contain'
    },

    // dot
    dot: {
        width: 11,
        height: 11,
        borderRadius: 6,
        marginLeft: 10,
        marginRight: 10
    },

    // line
    line: {
        borderColor: Common.LIGHT_GRAY, 
        borderWidth: 1, 
        marginVertical: 18
    },

    // text inputs
    input: {
        fontFamily: Common.REGULAR_FONT_STYLE,
        fontSize: Common.MID_FONT_SIZE,
        width: 300,
        height: 48,
        borderRadius: 6,
        marginBottom: 15,
        paddingLeft: 25,
        borderBottomColor: Common.LIGHT_GRAY,
        borderBottomWidth: 2
    },

    // modal
    modal: {
        backgroundColor: Common.WHITE, 
        width: 296, 
        height: 236, 
        alignSelf: 'center', 
        borderRadius: 5,
        paddingTop: Common.EXTRA_EXTRA_LARGE_MARGIN,
        paddingHorizontal: Common.EXTRA_EXTRA_LARGE_MARGIN,
    }
}