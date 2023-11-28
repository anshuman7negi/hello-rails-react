class Api::GreetingsController < ApplicationController
  def random_greeting
    render json: { greeting: Greeting.order('RANDOM()').first&.message }
  end
end
