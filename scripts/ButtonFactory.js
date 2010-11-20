/*
 * Copyright 2010 Manfred Kroehnert <mkroehnert@users.sourceforge.net>
 *
 * This software is licensed under the terms of GPLv3+:
 *
 * UltimateTactics is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * UltimateTactics is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with UltimateTactics.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @fileOverview Contains a RequireJS module which returns a factory for creating button objects.
 * @author <a href="mailto:mkroehnert@users.sourceforge.net">Manfred Kroehnert</a> 
 * @version 0.0
 */

/**
 * This RequireJS module returns a factory which can be used to create simple buttons.
 * It uses the {@link RaphaelCanvas} and {@link Options} modules.
 * @constructs ButtonFactory
 * @requires Options
 * @requires RaphaelCanvas
 */
define(['RaphaelCanvas', 'Options'], function(raphaelCanvas, options) {
    /**
     * Raphael set in which all created buttons get stored.
     * @private
     */
    var buttons = raphaelCanvas.set();
    
    /**
     * This method creates a button with the specified text and the passed in 
     * function as its onClick method and stores it in the private buttons
     * variable.
     * 
     * @param {String} buttonText the text which appears on top of the button
     * @param {function} onClickFunction the function which gets executed if the button is clicked
     */
    function createButton(buttonText, onClickFunction) {
        // create a text element
        var buttonText = raphaelCanvas.text(25, 10, buttonText);
        // create a box with rounded corners
        var buttonBox = raphaelCanvas.rect(0, 0, 50, 20, 10);
        // put the box behind the text
        buttonBox.insertBefore(buttonText);
        // set the colors according to the Options.buttons entries
        buttonBox.attr({
            stroke: options.buttons.borderColor,
            fill: options.buttons.fillColor
        });
        
        // set the onclick function on both the box and the text
        buttonBox.node.onclick = onClickFunction;
        buttonText.node.onclick = onClickFunction;
        
        // put the box and the text into a Raphael set
        var button = raphaelCanvas.set();
        button.push(buttonBox, buttonText);
        // push the created set in the factories buttons set
        buttons.push(button);
        
        // function which translates the buttons
        function translate(x, y) {
            button.translate(x, y);
        }
        
        // return the button object which contains the translate function
        return {
            translate: translate
        };
    };

    /**
     * This method returns the Raphael set which stores all created buttons.
     * @returns {Raphael.set} the Raphael set in which all created buttons are referenced.
     * @type Raphael.set
     */
    function getButtonSet() {
        return buttons;
    }
    
    /**
     * This factory can be used to create buttons as well
     * as to retrieve a Raphael set of all created buttons.
     * @lends ButtonFactory
     */
    return {
        createButton: createButton,
        getButtonSet: getButtonSet
    };
});
