'use strict';

var assert = require('assert');
var gdal = require('../lib/gdal.js');
var expect = require('chai').assert;

describe('Driver', function() {
	var expected = {
		"GTiff": {
			DMD_LONGNAME: "GeoTIFF",
			DMD_MIMETYPE: "image/tiff",
			DMD_EXTENSION: "tif",
			DCAP_CREATE: 'YES'
		},
		"VRT": {
			DMD_LONGNAME: "Virtual Raster",
			DMD_MIMETYPE: undefined,
			DMD_EXTENSION: "vrt",
			DCAP_CREATE: 'YES'
		},
		"MEM": {
			DMD_LONGNAME: "In Memory Raster",
			DMD_MIMETYPE: undefined,
			DMD_EXTENSION: undefined,
			DCAP_CREATE: 'YES'
		},
		"PNG": {
			DMD_LONGNAME: "Portable Network Graphics",
			DMD_MIMETYPE: "image/png",
			DMD_EXTENSION: "png",
			DCAP_CREATE: undefined
		},
		"JPEG": {
			DMD_LONGNAME: "JPEG JFIF",
			DMD_MIMETYPE: "image/jpeg",
			DMD_EXTENSION: "jpg",
			DCAP_CREATE: undefined
		}
	};

	Object.keys(expected).forEach(function(o) {
		describe(o, function() {
			it('should exist', function() {
				var driver = gdal.getDriverByName(o);
				var metadata = driver.getMetadata();
				var expected_meta = expected[o];
				assert.equal(expected_meta.DMD_LONGNAME,metadata.DMD_LONGNAME);
				assert.equal(expected_meta.DMD_MIMETYPE,metadata.DMD_MIMETYPE);
				assert.equal(expected_meta.DMD_EXTENSION,metadata.DMD_EXTENSION);
				assert.equal(expected_meta.DCAP_CREATE,metadata.DCAP_CREATE);
			});
		});
	});
});
