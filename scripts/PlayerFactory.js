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
 * @fileOverview Contains a RequireJS module which returns a factory for creating player objects.
 * @author <a href="mailto:mkroehnert@users.sourceforge.net">Manfred Kroehnert</a> 
 * @version 0.0
 */
 
/**
 * This RequireJS module returns a factory which can be used to create player
 * objects. It uses the {@link RaphaelCanvas} and {@link Options} modules.
 * @constructs PlayerFactory
 * @requires Options
 * @requires RaphaelCanvas
 */
define(['RaphaelCanvas', 'Options'], function(raphaelCanvas, options) {
    /**
     * Raphael set in which all created offensive players get stored.
     * @private
     */
    var offense = raphaelCanvas.set();
    /**
     * Raphael set in which all created defensive players get stored.
     * @private
     */
    var defense = raphaelCanvas.set();
    
    
    /**
     * This method creates a player at specified location with the given color
     * pushes it onto the set which is given as a parameter.
     * @inner
     * @param {Raphael.set} set Raphael set where the created player is added to.
     * @param {String} color the color to use for displaying the player.
     * @param {Number} x initial x position of the player.
     * @param {Number} y initial y position of the player.
     */
    function createPlayer(set, color, x, y) {
        var player = raphaelCanvas.circle(x, y, options.player.size);
        player.attr({
            stroke: color,
            fill: color
        });
        set.push(player);
        return player;
    }
    
    
    /**
     * This method creates an offensive player at the specified location.
     * @param {Number} [x = Options.field.width/2] initial x position of the player.
     * @param {Number} [y = Options.field.endzoneDepth] initial y position of the player.
     */
    function createOffensePlayer(x, y) {
        var offensePlayer = createPlayer(offense,
                                         options.player.offenseColor,
                                         (x || options.field.width / 2),
                                         (y || options.field.endzoneDepth));
    }
    
    
    /**
     * This method creates a defensive player at the specified location.
     * @param {Number} [x = Options.field.width/2] initial x position of the player.
     * @param {Number} [y = Options.field.length - Options.field.endzoneDepth] initial y position of the player.
     */
    function createDefensePlayer(x, y) {
        var defensePlayer = createPlayer(defense,
                                         options.player.defenseColor,
                                         (x || options.field.width / 2),
                                         (y || options.field.length - options.field.endzoneDepth));
    }
    
    
    /**
     * This method returns the Raphael set which stores all offensive players.
     * @returns {Raphael.set} the Raphael set in which all offensive players are referenced.
     * @type Raphael.set
     */
    function getOffenseSet() {
        return offense;
    }
    
    
    /**
     * This method returns the Raphael set which stores all defensive players.
     * @returns {Raphael.set} the Raphael set in which all defensive players are referenced.
     * @type Raphael.set
     */
    function getDefenseSet() {
        return defense;
    }
    
    /**
     * This factory can be used to create offensive and defensive players as well
     * as to retrieve a Raphael set of all created offensive or defensive players.
     * @lends PlayerFactory
     */
    return {
        createOffensePlayer: createOffensePlayer,
        createDefensePlayer: createDefensePlayer,
        getOffenseSet: getOffenseSet,
        getDefenseSet: getDefenseSet
    };
});
