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
    
    function loadPlay( ) {
      if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
      }
      else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("GET","plays/test.xml",false);
      xmlhttp.send();
      xmlDoc = xmlhttp.responseXML;
      
//       document.write(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
      frame = xmlDoc.getElementsByTagName("frame");
      for ( var i=0; i<frame.length; i++) {
        speed = frame[i].getElementsByTagName("speed")[0].childNodes[0].nodeValue;
        offense = frame[i].getElementsByTagName("offense");
        defense = frame[i].getElementsByTagName("defense");
        for ( var j=0; j<offense.length; j++ ) {
          playerFactory.getOffenseSet()[j].animate({
            cx: offense[j].getElementsByTagName("posX")[0].childNodes[0].nodeValue * options.viewer.scale,
            cy: offense[j].getElementsByTagName("posY")[0].childNodes[0].nodeValue * options.viewer.scale
          }, speed);
          playerFactory.getDefenseSet()[j].animate({
            cx: defense[j].getElementsByTagName("posX")[0].childNodes[0].nodeValue * options.viewer.scale,
            cy: defense[j].getElementsByTagName("posY")[0].childNodes[0].nodeValue * options.viewer.scale
          }, speed);
        }
      }
    };
    var loadButton = buttonFactory.createButton('Load', loadPlay);
    // translate the button to the side of the field
    loadButton.translate(options.field.width + 10, 100);

    // time used for the animation in the startAnimation function
    var animationTime = 1500;
    // function which animates all offensive and defensive players
    // to move to the middle of the field.
    function startAnimation() {
        playerFactory.getOffenseSet().animate({
            cy: options.field.length / 2,
            cx: options.field.width / 2
        }, animationTime);
        playerFactory.getDefenseSet().animate({
            cy: options.field.length / 2,
            cx: options.field.width / 2
        }, animationTime);
    };
    
    // create a button and set the startAnimation function as its action method
    var runButton = buttonFactory.createButton('Run', startAnimation);
    // translate the button to the side of the field
    runButton.translate(options.field.width + 10, 5);
    
    // function which resets all players on the ground line
    function reset() {
      for ( var k in playerFactory.getOffenseSet() ) {
        playerFactory.getOffenseSet()[k].attr({
            cy: options.field.endzoneDepth + options.player.size,
            cx: dist + k * dist + options.player.size
        });
        playerFactory.getDefenseSet()[k].attr({
            cy: options.field.length - options.field.endzoneDepth + options.player.size,
            cx: dist + k * dist + options.player.size
        });
      }
    }
    
    // create a button and set the reset function as its action method
    var resetButton = buttonFactory.createButton('Reset', reset);
    // translate the button to the side of the field
    resetButton.translate(options.field.width + 10, 50);
    
    // push all objects into one set and translate it so that it is not too close to the border
    var all = raphaelCanvas.set();
    all.push(fieldFactory.getFieldSet(),
             playerFactory.getOffenseSet(),
             playerFactory.getDefenseSet(),
             buttonFactory.getButtonSet());
    all.translate(5, 5);
});
