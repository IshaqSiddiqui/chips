const noteForm = document.querySelector('#note-form');

noteForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const meetingDate = document.querySelector('#meeting-date').value;
  const meetingTime = document.querySelector('#meeting-time').value;
  const attendees = document.querySelector('#attendees').value;
  const meetingNotes = document.querySelector('#meeting-notes').value;

  // Send note data to backend API
  const response = await fetch('/submit-note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      meetingDate,
      meetingTime,
      attendees,
      meetingNotes
    })
  });

  
  const confirmationPage = 
    "<h1>Note Submitted</h1> <p>Thank you for submitting your meeting notes. We'll take care of the rest!</p> "
  ;
  document.body.innerHTML = confirmationPage;
});