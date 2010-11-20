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
 * @fileOverview Contains a RequireJS module which contains a reference to the initialised Raphael canvas object.
 * @author <a href="mailto:mkroehnert@users.sourceforge.net">Manfred Kroehnert</a> 
 * @version 0.0
 */

/**
 * This RequireJS module creates a Raphael canvas element and returns it.
 * @constructs RaphaelCanvas
 * @requires raphael.js
 * @requires Options
 */

define(['scripts/raphael.js', './Options'], function(unused, options) {
    // get div in which the viewer should be displayed
    var divElement = document.getElementById(options.viewer.divName);
    // if dif does not exist show an error message
    if (!divElement)
        alert('The div which should be used for the UltimateTactics viewer does not exist');
    // if the resize option is set to true set the div size according to the Options entry
    if (options.viewer.resizeDiv) {
        divElement.style.width = options.viewer.width + 'px';
        divElement.style.height = options.viewer.length + 'px';
    }
    // create the Raphael canvas object in the div using the size of the div
    var raphaelCanvas = Raphael(divElement, divElement.style.width, divElement.style.height);
    // delete the reference to the DOM node to not create memory leaks
    delete  divElement;
    // return the canvas object
    return raphaelCanvas;
});
