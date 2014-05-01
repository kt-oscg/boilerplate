//= require bootstrap/affix
//= require bootstrap/alert
//= require bootstrap/button
//= require bootstrap/carousel
//= require bootstrap/collapse
//= require bootstrap/dropdown
//= require bootstrap/tab
//= require bootstrap/transition
//= require bootstrap/scrollspy
//= require bootstrap/modal
//= require bootstrap/tooltip
//= require bootstrap/popover

//Basic plugin tutorial
//http://learn.jquery.com/plugins/basic-plugin-creation/

(function ( $ ) {
 
    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };
 
    $.ltrim = function( str ) {
        return str.replace( /^\s+/, "" );
    };
 
    $.rtrim = function( str ) {
        return str.replace( /\s+$/, "" );
    };
 
}( jQuery ));

console.log("Hello from the plugin !!");
console.log("Running well !!");