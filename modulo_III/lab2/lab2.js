/**
 *     @author Seneida <seneidasanchez25@gmail.com>
 *     @fileOverview This script use Fetch API & JSON
 *     @licence BSD 3-Clause License
 */

//declaration vars
const avatar_url = String;

//URL of the JSON data
const url = 'https://api.github.com/users/mojombo/followers';

// Use fetch() to get the data
fetch(url)
  .then(response => {
    // Check if the request was successful
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })

 .then(getAvatarUrl => {
    // Use the JSON data
    console.log(getAvatarUrl);

     // Iterate over object fields using forEach and Object.entries
   /* Object.entries(getAvatarUrl).forEach(([key, value]) => {
      console.log(`avatar_url: ${value['avatar_url']}`);
    });*/

    // Iterate the object using object.value and forEach.
    Object.values(getAvatarUrl).forEach(value => {
      console.log("avatar_url: " + value.avatar_url);
    })
  })

  .catch(error => {
    // Handle the error
    console.error('There has been a problem with your fetch operation:', error);
  });
 
 
  


