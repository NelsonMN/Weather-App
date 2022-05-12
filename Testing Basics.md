INTRODUCTION:
- Test Driven Development, or TDD for short, is a BIG deal in the modern development landscape
- This ia concept that we introduced way back in our Fundamentals sections with our JS Exercises
- The main idea is that you start working on your code by writing automated tests BEFORE writing the code that is being tested
- There are tons of benefits to working like this, all of which will be discussed in the resources below

- There are many test-running systems available in JS: Mocha, Jasmine, Tape and Jest
- Fortunately the syntax for each one is very similar
- They all have their own set of special features, but the basic syntax is almost identical, so in the end it doesn't matter which one you use.

- This lesson is going to center around Jest
- The biggest reasons for this decision are that one of the best resources we've foudn for explaining JS testing uses it andthey have fantastic documentation
- In the end, writing tests is less about the syntax and more about the TDD philosophy
- The more important issues are knowing why we write tests and what we test rather than how


LEARNING OUTCOMES:
- Explain the basics of TDD
- Get up and running with Jest
- Writing basic tests

--------------

Why should developers care about automated unit tests?
- Keeps you out of the (time hungry) debugger!
- Reduces bugs in new features in existing features
- Reduces the cost of change
- Improves design
- Encourages refactoring
- Builds a safety net to defend against other programmers
- Is fun
- Forces you to slow down and think
- Speeds up development by eliminating waste
- Reduces fear

How does TDD take developement to the next level?
- Improves productivity by:
    - minimizing time spent debugging
    - reduces the need for manual (money) checking by developers tester
    - helping developers maintain focus
    - reduce wastage: hand overs
- Improves communication
- Creating living, up-to-date specification
- Communicate design decisions
- Learning: listen to your code
- Baby steps: slow down and think
- Improves confidence
- Testable code by design + safety net
- Loosely-coupled design 
- Refactoring


- In summary, the importance of TDD cannot be overemphasized
- TDD means less bugs, higher quality software, and a razor focus, but it can slow development down and the test suites can be tedious to manage and maintain
- All in all, it is a recommended approach as the Pros far outweighs the cons