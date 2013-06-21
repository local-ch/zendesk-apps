Reduce Options
==========

This new Zendesk app does reduce options of one field based of the value of another field.

We at local.ch use it like this:
When group is set to "Customer" then the visible dropdown values of "Category" is reduced to only the options which are ending with "(Plat)". For example: Category is configured to have these possible options:

- Banner (Prod)
- Map (Plat)
- Logo (Prod)
- Orders (Tech)

When the assignee is changed to "Customer/..." then the list is reduced to:

- Banner (Prod)
- Logo (Prod)

This is done via regex. It is meant as a starting point for other Zendesk users. You need to edit the code so it fits your needs. There are no options configurable.
