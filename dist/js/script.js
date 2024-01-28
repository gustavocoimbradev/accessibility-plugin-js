/**
 * accessibility.plugin.js
 * @version: v1.0.1
 * @author: Gustavo Coimbra
 *
 * Created by Gustavo Coimbra on 2024-01-26. Please report any bug at https://github.com/gustavocoimbradev/accessibility-plugin-js
 *
 * Copyright (c) 2024 Gustavo Coimbra https://gustavocoimbra.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

const accessibilityBox = document.querySelectorAll(`.js-accessibility`);

const increaseButton = document.querySelectorAll(`.js-increase`);

increaseButton.forEach((button) => {
    button.addEventListener(`click`, () => {
        const allTexts = document.querySelectorAll(`body *`);
        const increasePercentage = 10;
        const maximum = 5;

        let position = parseInt(accessibilityBox[0].getAttribute(`fs-position`)) || 0;
    
        if (position <= maximum) {
            allTexts.forEach((text) => {
                const currentSize = window.getComputedStyle(text).fontSize;
                const currentValue = parseFloat(currentSize);
                const newSize = currentValue * (1 + increasePercentage / 100);
                text.style.fontSize = newSize + `px`; 
            });
            position++;
        }
        
        accessibilityBox.forEach(element => {
            element.setAttribute('fs-position', position);
        });

    })
})

const decreaseButton = document.querySelectorAll(`.js-decrease`);

decreaseButton.forEach((button) => {
    button.addEventListener(`click`, () => {
        const allTexts = document.querySelectorAll(`body *`);
        const decreasePercentage = 10;
        const minimum = -2;
        let position = parseInt(accessibilityBox[0].getAttribute(`fs-position`)) || 0;

        if (position >= minimum) {
            allTexts.forEach((text) => {
                const currentSize = window.getComputedStyle(text).fontSize;
                const currentValue = parseFloat(currentSize);
                const newSize = currentValue * (1 - decreasePercentage / 100);
                text.style.fontSize = newSize + `px`; 
            });
            position--;
        }

        accessibilityBox.forEach(element => {
            element.setAttribute('fs-position', position);
        });

    })
})

const contrastButton = document.querySelectorAll(`.js-contrast`);

contrastButton.forEach((button) => {
    button.addEventListener(`click`, () => {
        button.classList.toggle(`active`);
        document.documentElement.classList.toggle(`accessibility-contrast`);
    });
})