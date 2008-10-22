// ==========================================================================
// ReadingListClient.Assignment
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
ReadingListClient.Assignment = SC.Record.extend(
/** @scope ReadingListClient.Assignment.prototype */ {

	dataSource: ReadingListClient.server,
	resourceURL: '/sc/assignments',
	properties: ['book_id', 'student_id'],
	primaryKey: ['guid'],
	
	bookType: 'ReadingListClient.Book',
	studentType: 'ReadingListClient.Student'

}) ;
