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

import Themes from './themes';

export const Colors = {
    BLACK:          '#000000',
    WHITE:          '#FFFFFF',
    SOFT_WHITE:     '#F9F9F9',
    NAVY:           '#131429',
    WHITE_GREY:     '#F5F5F5',
    ELECTRIC_TEAL:  '#00F1C3',
    DEEP_TEAL:      '#05D2BC',
    LIGHT_TEAL:     '#C4E8E4',
    BLUE_GREY:      '#AAB5C0',
    SOFT_GREY:      '#EAEAEA',
    LIGHT_GREY:     '#747474',
    DARK_GREY:      '#343434',
    TEXT_BLACK:     '#09091D',
    TEXT_PRIMARY:   '#0A0A1E',
    TRANSPARENT:    '#00000000',
    HEART_RED:      '#E31B23',
};

export const Gradients = {
    DARK: {
        Start:  '#0E0F2F',
        End:    '#190548',
    },
    LIGHT: {
        Start:  '#FFFFFF',
        End:    '#F5F5F5',
    },
    GREEN_BLUE: {
        Start:  '#00D6F6',
        End:    '#10CC53',
    },
    TRANSPARENT: {
        Start: "rgba(255, 255, 255, 0.001)",
        End: Colors.WHITE,
    },
};

export const ThemeColors = {
    [Themes.LIGHT]: {
        BACKGROUND: Colors.WHITE,
        TEXT_COLOR: Colors.BLACK,
    },
    [Themes.DARK]: {
        BACKGROUND: Colors.NAVY,
        TEXT_COLOR: Colors.WHITE,
    },
};
