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
 * @fileOverview Contains a RequireJS module which returns an object containing the configuration options of the application.
 * @author <a href="mailto:mkroehnert@users.sourceforge.net">Manfred Kroehnert</a> 
 * @version 0.0
 */

/**
 * @namespace This RequireJS module returns a configuration object containing values used
 * to parameterize the other factories ({@link ButtonFactory},
 * {@link PlayerFactory}, {@link FieldFactory}, {@link UltimateTactics}).
 */
define(function() {
    /** @private */
    var scale = 3;
    /** @private */
    var length = scale * 100;
    /** @private */
    var width = scale * 37;
    /** @private */
    var endzoneDepth = scale * 18;
    /** @private */
    var playerSize = scale * 1;
    /** @private */
    var discSize = scale * 1;
    
    return {
        /** Options related to the viewer in general. */
        viewer: {
            /** Name of the <div> element in which the viewer is displayed. */
            divName: 'UltimateTacticsViewer',
            /** If set to true the <div> is resized to the size of the viewer. */
            resizeDiv: false,
            /** Vertical size of the viewer. */
            length: length,
            /** Horizontal size of the viewer. */
            width: width
        },
        /** Options related to the visualisation of the playing field. */
        field: {
            /** The color in which the field is displayed. */
            fieldColor: 'green',
            /** The color in which the lines are displayed. */
            lineColor: 'white',
            /** The length of the field. */
            length: length,
            /** The width of the field. */
            width: width,
            /** The depth of the endzone. */
            endzoneDepth: endzoneDepth
        },
        /** Options related to the visualisation of the players. */
        player: {
            /** Size of the players visualisation. */
            size: playerSize,
            /** Color of the offensive players. */
            offenseColor: 'red',
            /** Color of the defensive players. */
            defenseColor: 'blue'
        },
        /** Options related to the visualisation of the disc. */
        disc: {
            /** The size of the discs visualisation. */
            size: discSize,
            /** The color of the discs visualisation. */
            color: 'white'
        },
        /** Options related to the visualisation of the buttons. */
        buttons: {
            /** Backgroundcolor of the buttons. */
            fillColor: '#fff',
            /** Bordercolor of the buttons. */
            borderColor: 'black'
        }
    };
});
