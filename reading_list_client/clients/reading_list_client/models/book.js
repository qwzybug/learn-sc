// ==========================================================================
// ReadingListClient.Book
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
ReadingListClient.Book = SC.Record.extend(
/** @scope ReadingListClient.Book.prototype */ {

	dataSource: ReadingListClient.server,
	resourceURL: '/sc/books',
	properties: ['title', 'author'],
	primaryKey: ['guid'],
	
	assignments: SC.Record.hasMany('ReadingListClient.Assignment', 'bookID')

}) ;
