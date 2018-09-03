require("minitest/autorun")
require("minitest/rg")
require_relative("testing_task_2.rb")

class CardGametest < MiniTest::Test

  def setup
    @card1 = Card.new("Hearts", 10)
    @card2 = Card.new("Spades", 1)
    @card3 = Card.new("Diamonds", 7)
  end

  def test_check_for_ace__true
    expected = true
    actual = CardGame.check_for_ace(@card2)

    assert_equal(expected, actual)
  end

  def test_check_for_ace__false
    expected = false
    actual = CardGame.check_for_ace(@card1)
    assert_equal(expected, actual)
  end

  def test_highest_card__high_low
    expected = @card1
    actual = CardGame.highest_card(@card1, @card2)
    assert_equal(expected, actual)
  end

  def test_highest_card__low_high
    expected = @card3
    actual = CardGame.highest_card(@card2, @card3)
    assert_equal(expected, actual)
  end

  def test_cards_total
    expected = "You have a total of 18"
    actual = CardGame.cards_total([@card1, @card2, @card3])
    assert_equal(expected, actual)
  end
end
