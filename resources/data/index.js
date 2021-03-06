var package = require('./../../package.json');
var images = require('./images.js');

module.exports = {
    "_comment": "Application data made available to handlebars.",
    "name": "Fear of Flying Shoot",
    "description": "",
    "version": package.version || "",
    "environment": process.env.NODE_ENV || "development",
    "production": (process.env.NODE_ENV === "production"),
    "images": JSON.stringify(images.get()),
    "download_url": "https://drive.google.com/open?id=1g44vB1fMT9e3iZ_DwQQjQhjtsRtlFuhD"
}
