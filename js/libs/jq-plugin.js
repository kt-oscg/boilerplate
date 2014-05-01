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