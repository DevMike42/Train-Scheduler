// Plan

// 1. Initialize Firebase
// 2. Create button for adding new train info - then update the html + update the database
// 3. Create a way to retrieve train info from the train database.
// 4. Create a way to calculate the train arrival time. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyAHl2SQb-A64VUZVNtENXq9E6LBqIkJMlA",
    authDomain: "train-scheduler-89897.firebaseapp.com",
    databaseURL: "https://train-scheduler-89897.firebaseio.com",
    projectId: "train-scheduler-89897",
    storageBucket: "",
    messagingSenderId: "1064244848276"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding train info
$("#add-train-btn").on("click", function (event) {

    event.preventDefault();

    // Grabs new train info from user input fields
    var trainName = $("#name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var trainFirst = $("#firstTrain-input").val().trim();
    var trainFreq = $("#frequency-input").val().trim();

    // Object for storing new train info
    var newTrain = {
        name: trainName,
        destination: trainDest,
        firstTime: trainFirst,
        frequency: trainFreq
    };

    // Pushed train info into Firebase
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTime);
    console.log(newTrain.frequency);

    alert("New Train successfully added");

    // Clears all input fields
    $("#name-input").val("");
    $("#destination-input").val("");
    $("#firstTrain-input").val("");
    $("#frequency-input").val("");

});

// 3. Create a way to retrieve train info from the train database.

// Firebase method used to trigger a function when new child is added to database
database.ref().on("child_added", function (childSnapshot) {

    // Stores retrieved data into variables
    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().destination;
    var trainFirst = childSnapshot.val().firstTime;
    var trainFreq = childSnapshot.val().frequency;

    // Console log info
    console.log(trainName);
    console.log(trainDest);
    console.log(trainFirst);
    console.log(trainFreq);

    // Prettify First Time input for use in calculating

    // Prettify Frequency input for use in calculating?

    // Calculate next arrival time

    // Create new row in Display Div
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainFreq),
        $("<td>").text("Next Arrival"),
        $("<td>").text("Minutes Away")
    );

    $("#train-table > tbody").append(newRow);


});