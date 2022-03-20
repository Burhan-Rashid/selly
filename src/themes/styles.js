/**
 * LifeRamp
 *
 * @author      Afaan Bilal
 * @copyright   LifeRamp Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import { Platform, StyleSheet, PixelRatio } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Themes from './themes';
import { Colors } from './colors';
import { FontSize, SpacingH } from './sizes';
import fonts from './fonts';

const THEME = Themes.DARK;

const isTabOrWeb = wp("100%") > 960;
const isTabPortrait = wp("100%") > 760 && wp("100%") < 960;

export const GlobalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        color: Colors.TEXT_BLACK,
        paddingTop: hp("2.5%"),
    },
    containerPaddingH: {
        paddingHorizontal: isTabPortrait ? wp("10%") : (isTabOrWeb ? wp("12%") : wp("5%")),
    },
    optionalPaddingH: {
        paddingHorizontal: isTabPortrait ? wp("10%") : (isTabOrWeb ? wp("12%") : 0),
    },
    text: {
        color: Colors.TEXT_BLACK,
    },
    stickRight: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-end",
    },
    stickBottomRight: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    circleAddButton: {
        alignSelf: "center",
        marginTop: SpacingH.s1,
        marginBottom: SpacingH.s2,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        // padding: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // elevation: 2,
    },
    closeButton: {
        position: "absolute",
        zIndex: 100,
        top: 20,
        right: 20,
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 18,
        padding: 3,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY,
    },
});

export const materialTopTabs = {
    indicatorStyle: {
        backgroundColor: Colors.DEEP_TEAL
    },
    labelStyle: {
        fontSize: FontSize.VERY_SMALL * 0.9,
        margin: 0,
        fontFamily: fonts.MainMedium
    }
};
