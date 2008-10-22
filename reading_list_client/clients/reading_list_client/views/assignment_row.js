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
		var content = this.get('content') ;
		
		// var attribution = content.get('title') + ", " + content.get('author') ;
		this.get('label').set('value', content.get('title')) ;
		
		// var books = ReadingListClient.studentController.get('books') ;
		// var assigned = (books) ? books.include(content) : NO;
		this.get('checkbox').set('value', content.get('assigned'));
	},
	
	init: function() {
		// this.set('checkbox', SC.CheckboxView.create()) ;
		sc_super() ;
		
		// var theLabel = SC.LabelView.create({contentBinding:'this.content', contentValueKey:'title'}) ;
		this.set('label', SC.LabelView.create()) ;
		this.set('checkbox', SC.CheckboxView.create()) ;
		
		this.appendChild(this.get('checkbox')) ;
		this.appendChild(this.get('label')) ;
	}

}) ;
