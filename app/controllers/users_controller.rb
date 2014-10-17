class UsersController < ApplicationController
	#respond only with json (to use in backbone)
	respond_to :json
	
	def index
		@users = User.all
		# gon.users = @users
	end
end