/**
 * Lighten or Darken Color
 *
 * The CSS preprocessors Sass and LESS can take any color and darken() or
 * lighten() it by a specific value. But no such ability is built into
 * JavaScript. This function takes colors in hex format (i.e. #F06D06, with or
 * without hash) and lightens or darkens them with a value.
 *
 * @param {String} colorCode The hex color code (with or without # prefix).
 * @param {Int} amount Positive integer to lighten, Negative to darken
 */


/*
* Example
* -------------------------------------------------------

* Lighten
* const NewColor = useLightenDarkenColor("#F06D06", 20);

* Darken
* const NewColor = useLightenDarkenColor("#F06D06", -20);
*/

const rgbify = (int) => {
    if (int > 255) {
        return 255;
    } else if (int < 0) {
        return 0;
    } else {
        return int;
    }
};

const useLightenDarkenColor = (colorCode, amount) => {
    let usePound = false;

    if (colorCode[0] == "#") {
        colorCode = colorCode.slice(1);
        usePound = true;
    }

    const num = parseInt(colorCode, 16);

    let r = (num >> 16) + amount;
    r = rgbify(r);

    let b = ((num >> 8) & 0x00FF) + amount;
    b = rgbify(b);

    let g = (num & 0x0000FF) + amount;
    g = rgbify(g);

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export default useLightenDarkenColor;
