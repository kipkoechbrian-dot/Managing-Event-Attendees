//Create attendee object
const attendee = {
   attendeeID: "T001",
   name: "Kipforce",
   event: "Meat Grill",
   ticketType: "VIP",
   ticketPrice: 5000
};

// Funtion to log attendee name
function logAttendeeName(attendee) {
   console.log(attendee.name);
}

//Function to log ticket price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

//Function to update ticket type
function updateTicketType(attendee, newType) {
    attendee.ticketType = newType;
}

//Function to update ticket price
function updateTicketPrice(attendee, newPrice) {
    attendee.ticketPrice = newPrice;
}

//Function to remove event property
function removeEventProperty(attendee) {
    delete attendee.event;
}

//Function to add checkedIn property
function addCheckedInProperty(attendee){
   attendee.checkedIn = true;
}

logAttendeeName(attendee);       // Kipforce
logTicketPrice(attendee);       // 5000

updateTicketType(attendee, "Regular");
updateTicketPrice(attendee, 1000);

console.log(attendee);

removeEventProperty(attendee);
addCheckedInProperty(attendee);

console.log(attendee);


