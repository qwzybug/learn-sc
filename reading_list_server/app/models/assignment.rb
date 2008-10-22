class Assignment < ActiveRecord::Base
  belongs_to :book
  belongs_to :student
  
  def self.rest_attributes
    return [:book_id, :student_id]
  end
end
