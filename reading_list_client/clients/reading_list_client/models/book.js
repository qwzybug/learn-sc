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

	// dataSource: ReadingListClient.server,
	// resourceURL: '/sc/books',
	properties: ['title', 'author'],
	primaryKey: ['guid'],
	
	assignments: SC.Record.hasMany('ReadingListClient.Assignment', 'book'),
	
	attribution: function() {
		return this.get('title') + ", " + this.get('author')
	}.property('title', 'author')
	
	// assigned: function() {
	// 	if (ReadingListClient.studentController.get('content')) {
	// 		return ReadingListClient.studentController.get('books').include(this);
	// 	}
	// }.property('ReadingListClient.studentsController.selection')

}) ;
