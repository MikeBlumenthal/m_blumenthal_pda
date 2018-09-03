### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
# by convention, the method name checkforAce should be check_for_ace
    if card.value = 1
      # the = in the line above should be == comparator
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # in the line above, dif should be def, also need comma between arguments
  if card1.value > card2.value
    return card.name
    # there is no name attribute for Card object, also need card1 not just card
  else
    card2
    # should say return card2
  end
end
end
# this end is unecessary/in the wrong place

def self.cards_total(cards)
  # if this is a class method, perhaps the other two should be? there is no initialize for new instances of CardGame class
  total
  # need to set initial value for total variable
  for card in cards
    total += card.value
    return "You have a total of" + total
    # this return needs to be outside of the for loop, also needs string interpolation of total variable
  end
end
# need an end keyword here for the class keyword in line 12
```
