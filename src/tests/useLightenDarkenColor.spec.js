import { useLightenDarkenColor } from '..';

describe('useLightenDarkenColor', () => {
    it('is truthy', () => {
        expect(useLightenDarkenColor).toBeTruthy();
    });

    it('should darken the color', () => {
        const white = '#ffffff';
        const color = useLightenDarkenColor(white, -20);
        expect(color).not.toEqual(white);
    });

    it('should lighten the color', () => {
        const black = '#000000';
        const color = useLightenDarkenColor(black, 20);
        expect(color).not.toEqual(black);
    })
});