// ==========================================================================
// ReadingListClient.StudentController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
ReadingListClient.studentController = SC.ObjectController.create(
/** @scope ReadingListClient.studentController */ {

  contentBinding: 'ReadingListClient.studentsController.selection',
	contentBindingDefault: SC.Binding.Single,
	
	books: function() {
		if (this.get('content')) {
			return this.get('assignments').records().get('book');
		}
	}.property('content')

}) ;
