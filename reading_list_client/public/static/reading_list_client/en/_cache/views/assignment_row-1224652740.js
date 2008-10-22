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

	render: function() {
		// var content = this.get('content') ;
		
		// var html = content.get('title') + ", " + content.get('author') ;		
		this.set('innerHTML', 'FOO') ;
		// this.set('innerHTML', html) ;
		
		// this.get('checkbox').set('value', YES) ;
		// this.get('label').set('value', content.get('title') + ", " + content.get('author'));
	}.observes('content'),
	
	init: function() {
		// this = SC.View.init();
		
		// var checkbox = SC.CheckboxFieldView.create() ;
		// var label = SC.LabelView.create() ;
		// // this.set('checkbox', checkbox) ;
		// // this.set('label', label) ;
		// 
		// this.appendChild(checkbox) ;
		// this.appendChild(label) ;
		
		return this;
	}

}) ;


/* End ------------------------------------------------------- views/assignment_row.js*/

