class ApplicationController < ActionController::Base
  protect_from_forgery

	def index
		
		gon.rabl
		# gon.foo = "bar"
		# to include all usefull data properties: pass rabl
		
	end
	
end
