// testing libraries:
const expect = require('chai').expect;
const assert = require('chai').assert;
const _ = require('lodash');
const fs = require('fs');

describe('data.json', function () {
    let json = undefined;

    before( function() {
        json = fs.readFileSync( './data/data.json', 'utf8');
        assert( typeof json === "string" );
    } );

    it('it should parse', function () {
        let json = fs.readFileSync( './data/data.json', 'utf8');
        assert( typeof json === "string" );
        data = JSON.parse(json);

        assert( typeof data === "object" );
        expect( _.keys( data ) ).to.have.lengthOf.above(120);
    });

    it( 'entries should follow defined format', function() {
        entries = _.values( JSON.parse(json) );

        for( let entry of entries )
        {
            expect( entry ).to.have.property( 'status' );
            expect( entry.status.toLowerCase() ).to.be.oneOf([ 'active', 'inactive', 'closed' ]);
            expect( entry ).to.have.property( 'region' );
            expect( entry ).to.have.property( 'name' );
            expect( entry ).to.have.property( 'type' );
            expect( entry.type ).to.be.oneOf([ 'Single Malt', 'Gin', 'Rye', 'Bourbon', 'Grain', 'Armagnac', 'Cognac', 'Rum' ]);
        }
    } );
});