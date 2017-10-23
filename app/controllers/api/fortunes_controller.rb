class Api::FortunesController < ApplicationController
  def index
    @fortunes = Fortune.all
    @fortune = @fortunes.sample(1).flatten
    mega_nums = (1..75).to_a
    mega_ball = (1..15).to_a
    power_nums = (1..69).to_a
    power_ball = (1..26).to_a
    @mega = []
    @mega += mega_nums.sample(5)
    @mega += mega_ball.sample(1)
    @power = []
    @power += power_nums.sample(5)
    @power += power_ball.sample(1)

    render :index
  end

  def show
  end
end
