# React testing library

The React Testing Library project consists of building a testing environment with 100% test coverage and
that are immune to mutations in the code.

## Who tests the tests?

In this job the automated evaluator test the tests! His idea is this: I wrote test cases for the application, and these tests have to guarantee that the application is working, right? Well then! If I break a part of the application by making a change to the code, your tests should break, right? That's what the evaluator does. As well? Think of it this way: our evaluator will navigate through the entire Pokédex application and make several changes to its code so that it breaks and stops working. Then it will run your tests. If your tests do not show that the application is in trouble, the evaluator will not approve that requirement! If, for all the changes that the evaluator makes in the application code, your tests show problems, everything will pass! The evaluator therefore ensures that his tests test the Pokédex application as it should! In the language of the evaluator, we say that every change the evaluator makes to your application is a mutant. The evaluator creates several mutants and your tests must kill them all! If any mutants survive, we're in trouble. Right? 

## Tests

There will be a folder called `./stryker` with several files filename.conf.json. Each of these is an evaluator setting
for a requirement and it should not be changed. When you have completed unit testing a file, run the command 
`npx stryker run ./stryker/filename.conf.json` to test that particular file.
