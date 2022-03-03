Feature: Todofeature try


    Scenario: Adding an item into empty todo list
        Given Empty ToDo list
        When I write "buy some milk" to text box and click to add button
        Then I should see "buy some milk" item in ToDo list

    Scenario: Adding an item into non-empty todo list
        Given ToDo list with "buy some milk" item
        When I write "enjoy the assignment" to text box and click to add button
        Then I should see "enjoy the assignment" insterted to ToDo list below "buy some milk"

    Scenario: Checking an item in todo list
        Given ToDo list with "buy some milk" item
        When I click on "buy some milk" text
        Then I should see "buy some milk" item marked as "buy some milk"

    Scenario: Unchecking an item in todo list
        Given ToDo list with marked "buy some milk" item
        When I click on "buy some milk" text
        Then I should see mark of "buy some milk" item should be cleared as "buy some milk"

    Scenario: Deleting an item from todo list
        Given ToDo list with "rest for a while" item
        When I click on delete button next to "rest for a while" item
        Then List should be empty

    Scenario: Deleting an item does not effact another item
        Given ToDo list with "rest for a while" and "drink water" item in order
        When I click on delete button next to "rest for a while" item
        Then I should see "drink water" item in ToDo list