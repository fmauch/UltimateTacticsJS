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
 * @fileOverview Contains a RequireJS module which returns a factory for creating the UlimateTactics application.
 * @author <a href="mailto:mkroehnert@users.sourceforge.net">Manfred Kroehnert</a> 
 * @version 0.0
 */

/**
 * This RequireJS module returns a factory which creates the UltimateTactics
 * application. It uses the following modules: {@link RaphaelCanvas},
 * {@link Options}, {@link FieldFactory}, {@link PlayerFactory} and
 * {@link ButtonFactory}.
 * @constructs UltimateTactics
 * @requires RaphaelCanvas
 * @requires Options
 * @requires FieldFactory
 * @requires PlayerFactory
 * @requires ButtonFactory
 */
define(['RaphaelCanvas', 'Options', 'FieldFactory', 'PlayerFactory', 'ButtonFactory'], function(raphaelCanvas, options, fieldFactory, playerFactory, buttonFactory) {
    // create a field first
    fieldFactory.createField();
    
    // create 7 offensive and defensive players
    var dist = options.field.width / 8;
    playerFactory.createOffensePlayer(1 * dist);
    playerFactory.createOffensePlayer(2 * dist);
    playerFactory.createOffensePlayer(3 * dist);
    playerFactory.createOffensePlayer(4 * dist);
    playerFactory.createOffensePlayer(5 * dist);
    playerFactory.createOffensePlayer(6 * dist);
    playerFactory.createOffensePlayer(7 * dist);
    
    playerFactory.createDefensePlayer(1 * dist);
    playerFactory.createDefensePlayer(2 * dist);
    playerFactory.createDefensePlayer(3 * dist);
    playerFactory.createDefensePlayer(4 * dist);
    playerFactory.createDefensePlayer(5 * dist);
    playerFactory.createDefensePlayer(6 * dist);
    playerFactory.createDefensePlayer(7 * dist);

    // time used for the animation in the startAnimation function
    var animationTime = 1500;
    // function which animates all offensive and defensive players
    // to move to the middle of the field.
    function startAnimation() {
        playerFactory.getOffenseSet().animate({
            cy: options.field.length / 2
        }, animationTime);
        playerFactory.getDefenseSet().animate({
            cy: options.field.length / 2
        }, animationTime);
    };
    
    // create a button and set the startAnimation function as its action method
    var runButton = buttonFactory.createButton('Run', startAnimation);
    // translate the button to the side of the field
    runButton.translate(options.field.width + 10, 5);
    
    // push all objects into one set and translate it so that it is not too close to the border
    var all = raphaelCanvas.set();
    all.push(fieldFactory.getFieldSet(),
             playerFactory.getOffenseSet(),
             playerFactory.getDefenseSet(),
             buttonFactory.getButtonSet());
    all.translate(5, 5);
});
