// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateVisitorCount();
});

const apiUrl = "https://a8chskyqn1.execute-api.ap-southeast-1.amazonaws.com/Prod/retrieve"

async function updateVisitorCount() {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        
        console.log('Visitor count updated:', data.visitor_count);
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