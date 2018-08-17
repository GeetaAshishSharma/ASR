// @<COPYRIGHT>@
// ==================================================
// Copyright 2018.
// Siemens Product Lifecycle Management Software Inc.
// All Rights Reserved.
// ==================================================
// @<COPYRIGHT>@

/*global
 define
 */

/**
 * Simple Alert service for sample command Handlers
 *
 * @module js/BabuRaoService
 */
define( [], function() {
    'use strict';

    var exports = {};

    /**
     * Dummy alert.
     */
    exports.alert = function( text ) {
        alert( text ); // eslint-disable-line no-alert
    };

    return exports;
} );
