// ==========================================================================
// ReadingListClient.Student
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
ReadingListClient.Student = SC.Record.extend(
/** @scope ReadingListClient.Student.prototype */ {

 	dataSource: ReadingListClient.server,
	resourceURL: '/sc/students',
	properties: ['name'],
	primaryKey: ['guid'],
	
	assignments: SC.Record.hasMany('ReadingListClient.Assignment', 'student')

}) ;
