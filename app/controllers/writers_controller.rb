class WritersController < ApplicationController
  def index
    @writers = Writer.all
  end

  def new
    @writer = Writer.new
    respond_to do |format|
      format.js
    end
  end

  def create
    @writers = Writer.all
    @writer = Writer.create(writer_params)
    respond_to do |format|
      if @writer.save
        format.js
      else
        format.js { render action: :new }
      end
    end
  end

  def edit
    @writer = Writer.find_by(id: params[:id])
    respond_to do |format|
      format.js
    end
  end

  def update
    @writers = Writer.all
    @writer = Writer.find_by(id: params[:id])
    respond_to do |format|
      if @writer.update(writer_params)
        format.js
      else
        format.js { render action: :new }
      end
    end
  end

  def show
    @writer = Writer.find_by(id: params[:id])
    respond_to do |format|
      format.js
    end
  end

  def destroy
    @writers = Writer.all
    @writer = Writer.find_by(id: params[:id])
    @writer.destroy
    respond_to do |format|
      format.js
    end
  end

  private

  def writer_params
    params.require(:writer).permit(:name)
  end
end
