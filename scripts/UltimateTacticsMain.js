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
 * @fileOverview Contains the RequireJS module which creates an instance of {@link UltimateTactics}.
 * @author <a href="mailto:mkroehnert@users.sourceforge.net">Manfred Kroehnert</a> 
 * @version 0.0
 */

/**
 * This RequireJS module is the main entry point for the {@link UltimateTactics}
 * application. It uses the {@link UltimateTactics} module and creates an
 * instance of it.
 * @constructs UltimateTacticsMain
 * @requires UltimateTactics
 */
require(['UltimateTactics'], function(ultimateTactics) {
    //This function is called when scripts/raphael.js is loaded.

    require.ready(function() {
        //This function is called when the page is loaded (the DOMContentLoaded
        //event) and when all required scripts are loaded.

        //Do nested require() calls in here if you want to load code
        //after page load.
    });
});
