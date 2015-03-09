# Application TurnUp and TuneIn

This is an app which uses estimote beacons to trigger some actions on the server side.

# Application is written in Cordova.

It is using estimote examples to scan for beacons and cordova device plugins;
It is a simple one page application to make it as simple as possible to use;
It gets beacons data from a given server using mobile's user email address;
If email matches information in external DB it looks for beacon's details provided;

# Beacon is found

When beacon is found it sends information back to server which will take some additional actions ( sending user's songs to the respective spotify list).

