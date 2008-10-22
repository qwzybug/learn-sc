class Book < ActiveRecord::Base
  has_many :assignments
  has_many :students, :through => :assignments
  
  def self.rest_attributes
    return [:title, :author]
  end
end
