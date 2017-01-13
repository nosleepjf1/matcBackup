/**
 * Created by bobnweave on 3/8/16.
 */
const EventEmitter = require('events');

var elevator = new EventEmitter();

var currentFloor = 2;
var closed = false;

elevator.on('closingDoor', function() {
    console.log('door is closing');
});

elevator.on('closeDoor', function() {
    console.log('door is closed');
    var closed = true;
});

elevator.on('travel', function(floor) {
  if(closed === true) {
      if (floor === currentFloor) {
          elevator.emit('openDoor');
      }
      else {
          console.log('elevator is moving to level' + floor);
          setTimeout(function () {
              elevator.emit('openDoor')
          }, 3000);
          currentFloor = floor;
      }
  }
    else{
      setTimeout(function () {
          elevator.emit('travel')
      }, 1000);
  }
});

elevator.on('openDoor', function() {
    console.log('door is open');
    closed = false;
});

elevator.on('floor1Button', function() {
    console.log('floor 1 button pushed');
    elevator.emit('closingDoor');
    setTimeout(function() {
        elevator.emit('closeDoor')
    }, 1000);
    elevator.emit('travel', 1);
});

elevator.on('floor2Button', function() {
    console.log('floor 2 button pushed');
    elevator.emit('closingDoor');
    setTimeout(function() {
        elevator.emit('closeDoor')
    }, 1000);
});

elevator.on('floor3Button', function() {
    console.log('floor 3 button pushed');
    elevator.emit('closingDoor');
    setTimeout(function() {
        elevator.emit('closeDoor')
    }, 1000);
});



elevator.emit('floor1Button');
