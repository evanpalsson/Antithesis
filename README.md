# Antithesis

https://github.com/AshleyRoll/Antithesis

**A Forex Trading Tool using the OANDA API**

After playing with a number of Forex APIs in the past, I found out 
recently that OANDA have released a new modern RESTful/JSON API!

Finally, a sensible step forward into the 21st century!

http://developer.oanda.com/docs/

This has inspired me to build the *Antithesis* browser based trading tool.

## Why?

I have been studying Forex for a number of years in bursts between
other things. I found that I was unhappy with the tools available that
most traders use because they are focused on indicators, analysis, news etc. 
All of which I find distracting. 

I utilise a simple price action methodology, trading from mostly the daily charts.
I want to maintain a process where I analyse the markets I'm following each day,
keeping records and reviewing them. I could do this with a note pad and pen, but
I'm a software engineer, so I want to do it on my computer, and keep it all together.

Therefore I decided to build this browser based trading tool. It will also help me
learn more about AngularJS.

## Features

I am working to deliver the following (mostly for my own benefit). If you want to help, 
let me know!

* Browser based, modern AngularJS application
* Sign into your OANDA Practice or Trade account, showing details and open positions
* Risk/Reward calculator focused on value, not pips, and trade placement.
* Configure a set of instruments you are interested in
* Simple, clean and basic charting suitable for price action trading with a set of global
options applying to all instruments, configurable by period (1D,4H,1H, etc)
  * Simple Moving Averages
  * Exponential Moving Averages
  * Colours
* Record chart configuration per period (1D, 4H, 1H), allowing review of your 
previous analysis, forming a comprehensive trade diary.
  * Simple way to mark support and resistance levels
  * Analysis Notes
  * Ability to project support and resistance levels between time frames

## Setup

Download the source and point you local IIS instance at the *src* folder.
Ok, there is a little more to it, see below.

This is intended to be run from your local system and not on an open system
at this stage. That will come later.

Ok, now lets make it run properly:

1. Edit your *etc/hosts* file (yes there is one in windows) and add an entry something like 
*127.0.0.20 antithesis.localdomain*. The idea being that we want a local IP address only mapping
the name.
2. Generate a self-signed SSL certificate for your new site
3. Create a new Application Domain called *Antithesis* or what ever you like. It should be Integrated Mode
.Net 4.5
4. Create a new Site. Bind it to HTTPS (and select the self signed cert you made before) and bind it to
the IP address you added into the your *etc/hosts* file. 
5. Point the site at the *src* folder in the Antithesis repo.
6. Ensure that you disable Anonymous Access and enable Basic Authentication (over SSL). You will want/need to do this
so you can store your settings and analysis data locally on the server. 

Note that in time, I'll probably move the storage of your settings and analysis data to some web based service
like Google Drive or Dropbox, but that will come later.





