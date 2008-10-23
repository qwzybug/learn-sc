// ==========================================================================
// ReadingListClient.StudentAssignmentsController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
ReadingListClient.studentAssignmentsController = SC.CollectionController.create(
/** @scope ReadingListClient.studentAssignmentsController */ {

 	contentBinding: 'ReadingListClient.studentController.assignments',
	
	booksAndAssignments: function() {
		var assignedBooks = this.get('arrangedObjects').get('book');
		var books = ReadingListClient.booksController.get('arrangedObjects') ;
		var student = ReadingListClient.studentController.get('content');
		if (student === undefined) return [];
		
		return books.map(function(book){
			var box = SC.Object.create({ assigned: assignedBooks.include(book),
															  attribution: book.get('attribution'),
																		   book: book, student: student }) ;
			box.addObserver('assigned', this.toggle) ;
			return box;
		}, this) ;
	}.property('arrangedObjects'),
	
	toggle: function(sender) {
		if (sender.get('assigned')) {
			console.log("Assigning '%@' to %@".fmt(sender.getPath('book.title'), sender.getPath('student.name')) ) ;
			ReadingListClient.Assignment.newRecord({ book: sender.get('book'),
																					  student: sender.get('student') }) ;
		} else {
			console.log("Unassigning '%@' from %@".fmt(sender.getPath('book.title'), sender.getPath('student.name')) ) ;
			ReadingListClient.Assignment.find({ book: sender.get('book'),
																			 student: sender.get('student') }).destroy();
		}
	}

}) ;
