class RestfulController < ApplicationController
  
  # declarative helper to set the represented class
  def self.model klass_name
    @@klass = klass_name.classify.constantize
  end
  
  # standard REST methods
  def index
    respond_to do |wants|
      wants.json do
        records = @@klass.all :order => params[:order]
        render :text => { :records => to_hash(records),
                          :ids => records.map(&:id),
                          :count => records.size }.to_json
      end
    end
  end
  
  def show
    respond_to do |wants|
      wants.json do
        records = @@klass.find(params[:id] || params[:ids].split(','))
        render :text => to_hash(records).to_json
      end
    end
  end
  
  def create
    respond_to do |wants|
      wants.json do
        response = []
        params[:records].each_pair do |record_id, record|
          record.delete(id)
          guid = record.delete(:_guid)
          survey = @@klass.new(record)
          survey.save
          response << {:_guid => guid, :id => survey.id}
        end
        render :text => response.to_json
      end
    end
  end
  
  def update
    logger.info("FOO BAR FOO BAR FOO BAR")
    respond_to do |wants|
      wants.json do
        params[:records].each_pair do |record_id, record|
          survey = @@klass.find(record.delete(:id))
          survey.attributes = record
          survey.save
        end
        head :ok
      end
    end
  end
  
  def destroy
    respond_to do |wants|
      wants.json do
        @@klass.destroy(params[:id] || params[:ids].split(','))
        head :ok
      end
    end
  end
  
  private
  
  def to_hash(records)
    records = [records] unless records.is_a? Array
    logger.info records.inspect
    records.map do |record|
      h = {:id => record.id, :type => record.class.name}
      @@klass.rest_attributes.each do |name|
        h[name.to_s.camelize(:lower)] = record.send(name)
      end
      h
    end
  end
end