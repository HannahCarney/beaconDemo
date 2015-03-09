# Application TurnUp and TuneIn

This is an app which uses estimote beacons to trigger some actions on the server side.

# Application is written in Cordova framework.

It is using estimote examples to scan for beacons and cordova device plugins;
It is a simple one page application to make it as simple as possible to use;
It gets beacons data from a given server using mobile's user email address;
If email matches information in external DB it looks for beacon's details provided;
To run it for android environment:
- cordova build
- cordova run 
  
second line copies the app to mobile attached to the computer if it is in developement mode;

# Beacon is found

When beacon is found it sends information back to server which will take some additional actions ( sending user's songs to the respective spotify list).


It is final a part of a final project of MakersAcademy course taken by group of 5 people and delivered in 12 days.
