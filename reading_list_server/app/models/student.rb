class Student < ActiveRecord::Base
  has_many :assignments
  has_many :books, :through => :assignments

  def self.rest_attributes
    return [:name]
  end
end
