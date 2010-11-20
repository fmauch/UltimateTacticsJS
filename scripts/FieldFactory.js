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
 * @fileOverview Contains a RequireJS module which returns a factory for creating field objects.
 * @author <a href="mailto:mkroehnert@users.sourceforge.net">Manfred Kroehnert</a> 
 * @version 0.0
 */

/**
 * This RequireJS module returns a factory which can be used to create field
 * objects. It uses the {@link RaphaelCanvas} and {@link Options} modules.
 * @constructs FieldFactory
 * @requires Options
 * @requires RaphaelCanvas
 */
define(['RaphaelCanvas', 'Options'], function(raphaelCanvas, options) {
    /**
     * Raphael set in which all created fields get stored.
     * @private
     */
    var fields = raphaelCanvas.set();
    
    /**
     * This method creates a field according to the values stored in Options.field.
     */
    function createField() {
        // create a shortcut for accessing the Options.field values
        var fieldOptions = options.field;
        // get the field width
        var width = fieldOptions.width;
        // get the field length
        var length = fieldOptions.length;
        // get the endzone depth
        var endzoneDepth = fieldOptions.endzoneDepth;
        // create a Raphael set to store all field elements in
        var field = raphaelCanvas.set();
        // create the lines marking the field as boxes
        field.push(
            raphaelCanvas.rect(0, 0, width, length),
            raphaelCanvas.rect(0, 0, width, length - endzoneDepth),
            raphaelCanvas.rect(0, 0, width, endzoneDepth)
            // TODO: add brick points
        );
        // set the line color and the field color according to Options.field.fieldColor
        // and Options.field.lineColor
        field.attr({
            fill: fieldOptions.fieldColor,
            stroke: fieldOptions.lineColor
        });
        // add the created field to the private fields set
        fields.push(field);
        
        // function to translate the created fields
        function translate(x, y) {
            field.translate(x, y);
        }
        
        // return the field object which contains the translate function
        return {
            translate: translate,
        };
    }
    
    /**
     * This method returns the Raphael set which stores all created fields.
     * @returns {Raphael.set} the Raphael set in which all created fields are referenced.
     * @type Raphael.set
     */
    function getFieldSet() {
        return fields;
    }

    /**
     * This factory can be used to create fields as well
     * as to retrieve a Raphael set of all created fields.
     * @lends FieldFactory
     */
    return {
        createField: createField,
        getFieldSet: getFieldSet
    };
});
