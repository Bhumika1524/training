class ArticlesController < ApplicationController
  before_action :find_article, only: [:show, :update, :edit, :destroy]
  def find_article
    @article = Article.find_by(id: params[:id])
  end

  def index
    @article = Article.all
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to articles_path
    else
      render :new
    end
  end

  def show
    # @article = Article.find_by(id: params[:id])
  end

  def edit
    # @article = Article.find_by(id: params[:id])
  end

  def update
    unless params[:article][:hobby].present?
      params[:article][:hobby] = []
    end
    # @article = Article.find_by(id: params[:id])
    if @article.update(article_params)
      redirect_to article_show_path
    else
      render :edit
    end

  end

  def destroy
    # @article = Article.find_by(id: params[:id])
    @article.destroy

    redirect_to root_path
  end

  private

  def article_params
    params.require(:article).permit(:name, :gender, :subject, hobby: [])
  end
end