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
		
		var attribution = content.get('title') + ", " + content.get('author') ;
		this.get('label').set('value', attribution) ;
	}.observes('content'),
	
	init: function() {
		this.set('checkbox', SC.CheckboxView.create()) ;
		this.set('label', SC.LabelView.create()) ;
		
		this.appendChild(this.get('checkbox')) ;
		this.appendChild(this.get('label')) ;
	}

}) ;
