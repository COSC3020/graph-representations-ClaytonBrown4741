[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12091096&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency list to an adjacency matrix for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency matrix to an adjacency list and
analyze it as above.
  
I used the following source in order to figure out how exactly to create a  
2D array in Javascript:  
https://sentry.io/answers/how-can-i-create-a-two-dimensional-array-in-javascript/

The runtime for converting an adjacency list to an adjacency matrix would be  
$\Theta(|E|)$. This is because in order to transfer the data between the two,  
we must ultimately iterate over every possible edge in the data structure.  
With adjacency lists, this is fairly simple.
The runtime for converting an adjacency matrix to adjacency list would be  
$\Theta(|V^2|)$. Unlike the adjacency list (which can simply look at any given  
node and see which edges are attached to it), the adjacency matrix must go  
through *every* possible place for an edge in order to see if it exists. As  
a result, we end up going over every element in the data structure, the  
number of which is V^2.
(Please note that for these complexities, I did not count the initial creation  
of the blank adjacency list/matrix at the very beginning of both functions.  
If you’d like me to do so in my answer, please let me know and I’ll add them  
in as soon as possible. Thank you).

