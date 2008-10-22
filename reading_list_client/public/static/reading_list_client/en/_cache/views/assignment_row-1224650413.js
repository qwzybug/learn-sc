/* Start ----------------------------------------------------- views/assignment_row.js*/

// ==========================================================================
// ReadingListClient.AssignmentRowView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
ReadingListClient.AssignmentRowView = SC.View.extend(
/** @scope ReadingListClient.AssignmentRowView.prototype */ {

	//   emptyElement: '',
	// 
	// content: [],
	// contentBindingDefault: SC.Binding.SingleNull,
	
	render: function() {
		var content = this.get('content') ;
		
		var html = content.get('title') + ", " + content.get('author') ;
		
		this.set('innerHTML', html) ;
	}.observes('content')
	
	

}) ;


/* End ------------------------------------------------------- views/assignment_row.js*/

