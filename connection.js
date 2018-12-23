function init() {
 Tabletop.init( { key: 
 ‘https://docs.google.com/spreadsheets/d/1rDixZ4hdeQMMJt401cXYPGsCfCN3VMW6v4sbhsz2NpM',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
