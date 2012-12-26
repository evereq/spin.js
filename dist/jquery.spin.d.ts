/// <reference path="jquery.d.ts" />

/* You can now create a spinner using any of the variants below:

$("#el").spin(); // Produces default Spinner using the text color of #el.
$("#el").spin({ ... }); // Produces a Spinner using your custom settings.
$("#el").spin(false); // Kills the spinner.

*/

module spin {
    
    export interface IOptions {
        lines?: number;
        length?: number;
        width?: number;
        radius?: number;
        left?: number;
    }
}

interface JQuery {
        spin(opts?: spin.IOptions, color?: string): JQuery;
}