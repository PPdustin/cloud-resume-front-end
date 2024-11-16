// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateVisitorCount();
});

const apiUrl = "https://a8chskyqn1.execute-api.ap-southeast-1.amazonaws.com/Prod/hello"

async function updateVisitorCount() {
    try {
      // Make a POST request to the API
      const response = await fetch(apiUrl, {
        method: 'GET', // or 'GET' if your API expects a GET request
        headers: {
          'Content-Type': 'application/json', // Set the correct content type if needed
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        
        console.log('Visitor count updated:', data.visitor_count);
        // Optionally, display the visitor count on the webpage
        document.getElementById('visitCount').textContent = `${data.visitor_count}`;
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

// Function to update the visit counter
// function updateVisitCounter() {
//     // Get the current visit count from localStorage
//     let visits = localStorage.getItem('pageVisits');
    
//     // Increment the visit count or initialize it to 1 if it doesn't exist
//     visits = visits ? parseInt(visits) + 1 : 1;
    
//     // Save the new visit count
//     localStorage.setItem('pageVisits', visits);
    
//     // Update the display
//     document.getElementById('visitCount').textContent = visits;
// }