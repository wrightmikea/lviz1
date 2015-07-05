'use strict';

var LightningVisualization = require('lightning-visualization');

/* 
// Uncomment this code to require an optional stylesheet
var fs = require('fs');
var styles = fs.readFileSync(__dirname + '/test.css');
*/

/*
 * Extend the base visualization object
 */
var Visualization = LightningVisualization.extend({

    init: function() {
        /*
        // FILL IN Add any logic for initializing the visualization
        */
        console.log('lviz1/index.js:init');
        this.render();
    },

    /*styles: styles,*/ // optionally pass a string of CSS styles 

    render: function() {
        /*
        // FILL IN Render the visualization
        // FILL IN Get data / selector from this.data and this.selector
        */
        console.log('lviz1/index.js:render');
    },

    formatData: function(data) {
        /*
        // Format your data from a raw JSON blob
        */
        parsedData = JSON.parse(data);
        console.log('lviz1/index.js:formatData' + data);
        console.log(parsedData);
        return data;
    },

    updateData: function(formattedData) {
        this.data = formattedData;
        /*
        // FILL IN Re-render your visualization
        */
        console.log('lviz1/index.js:updateData');
    },

    appendData: function(formattedData) {    
        /*
        // FILL IN Update this.data to include the newly formatted data
        // FILL IN Re-render the visualization
        */    
        console.log('lviz1/index.js:appendData');
    }

});


module.exports = Visualization;
