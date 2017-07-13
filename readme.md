Movie app connecting to OMDB movie API.
1. route which renders a form with an input field and a button
2. the form will have a method of type get.
3. action is going to the url of the http://www.omdbapi.com/?apikey=thewdb&s=amsterdam
4. with request() add the body of the message variable
5. create a variable in step 4. which holds the body and parsed the body to json. 
6. redirect to page results 
7. in the route of the page result add an object of {data:data} which will refer to the variable where the json is parsed.

refactor:
8. The input in the search field needs to be captured in a variable, req.body.[name of formfield] http://www.omdbapi.com/?apikey=thewdb& s=[naam van zoek criteria]
9. via het "imdbID":"tt0053140" id van de movie, de query string is i= kun je drill down op de move, meer informatie. De show route van de movie.

extra:
10. add extra query string info. bv de keuze voor lang plot of kort plot (radio button?)
11. 
