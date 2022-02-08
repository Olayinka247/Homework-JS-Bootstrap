// MANDATORY JS EXERCISES (create a different file for this exercise)
//     1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
//     2) Create an unordered list using JavaScript and save it in a variable
//     3) Cycle the array and create a list-item via JavaScript for every element
//     4) Insert the genere as text in the list-item
//     5) Append the list items in the unordered list
//     6) Append the unordered list in the document. The list should appear in the page.

// Question 1  
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"];

//Question 2 
const unNode = document.createElement("ul")
// Question 3
  for (let i = 0; i <= genres.length; i++ ){
      const list = document.createElement("li")
// Question 4   
      list.innerText= genres[i]
// Question 5
      unNode.appendChild(list)
    }
// Question 6
    document.body.appendChild(unNode)
    
   
    