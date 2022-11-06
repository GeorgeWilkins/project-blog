### Background


### Design
![Test Setup](https://lh3.googleusercontent.com/pw/AL9nZEXjM7PS5GpFYHDoxguiiRIw-aRQ0di_bt538ANOSi7lMvYkO1mCr_kec-mMVf92BeaqZ5WeNrLMsdstLjlPs35c59O8HL7gkJT-49bvn8bX7RnwcrjibuVU49gu_xJLVWQq-XvFCxYG_je4UknWuN2gFQ=w1218-h685-no)
The first step was of course a proof of concept circuit. If I couldn't get the electronics and software working, there was little point in designing the rest of the unit. Thankfully this was pretty straight forward.

I initially chose the Seeeduino XIAO as the micro-controller for this project. At around 5 GBP a piece, They are absolutely tiny while offering plenty of IO and a quite powerful Arm Cortex M0+ chip. Most importantly, they use USB-C instead of the awful USB Micro connectors found on most Arduino-like boards.

I struggled to find an LED segment display that would match the interior dash lighting of the 370Z; but came close with the Adafruit Quad Alphanumeric Display in red. It wasn't quite the right style of display to match the matrix-like dashboard screens, but I figured I could try other displays once I had the GPS functionality working and this would make a nice test bed.

A simple LDR provides basic ambient light awareness for the controller, allowing it to dim the LED output when driving at night.

![Cleaned Up For In-Car Testing](https://lh3.googleusercontent.com/pw/AL9nZEVAYvqen8s0NrkZl2bo32dPvQqC4N5c3ingSfb8NE29F_OKPoYz-HBsBQFmenIZo82jUwsH8BMHipIrVBBxiwm3Ov05q_bAX8z5WbgI_tJ105WafSz1mFPzKvgaRhW8jRPfB72Xbi_OcdQD41asxCDAiw=w1218-h685-no)
Unfortunately testing the software of a speed-reporting GPS device is not easy when you're standing still. Obviously I could disable the GPS itself and simulate ramping speed values to test the display communication; but I'd need to take it out on the road to check that signal strength and responsiveness were sufficient.

I sat the device on the passenger seat and did some initial test runs by slowly accelerating to a 'known' speed (according to the car's speedometer) and then glancing the the display output. It was immediately obvious that the speedometer was consistently reporting a few MPH under the GPS-reported speed; a difference that grew at higher speeds. Additionally, I was surprised by how fast the GPS speed refreshed when under hard acceleration.

### Software



### First Prototype
![The First Prototype](https://lh3.googleusercontent.com/pw/AL9nZEXr9DhMFBoSCc30czcQhYnT5VSfUbxjnIXlubuZ5R22ZBwAHksMcOjQ-IAapwGi2fTjmAh_uDZCW7-EwNKsxQyqOTTRLTiAYv71XLxaw3P0FIZGucuRA1eNqdnHo5H-a512cNtKkp66ZOYIm596ICtMsQ=w1218-h685-no)
Since I was happy with the performance of the electronics and software, I proceeded to design and print a simple two-piece case. The front display portion friction-fits over the back, which houses the GPS unit and micro-controller. I'd initially thought the GPS antenna would be heavily attenuated if obscured by PLA printed parts; so the case design exposes the antenna at the top. This is the primary reason for the case being quite bulky, despite the diminutive electronics.

In this version of the design I'd not given much though to the mounting method within the car. I toyed with making a flexible gooseneck USB-C power cable that would act as an arm for the unit; but the combination of unit and arm weight turned out to be too heavy to support on the USB sockets.

### Second Prototype
![The Second Prototype](https://lh3.googleusercontent.com/pw/AL9nZEVFBZOE28yF8-vF3qFV_31Hj9BGAzFOddl4ck9JFn0RahMhqtLQydC78adxQ95YDUQWNlAKM-a0xBKDsD2z5D7yCl1CRsq95mzb7JBqQQt_QIVNZRgPsIA8Rqe9IdbUyWWFmXwfoGmm-MtGMj-vl_Cqrg=w1218-h685-no)
From further experimentation it became apparent that the GPS antenna orientation and exposure did not actually affect the fix speed or signal quality in a noticeable manner. Surprisingly, even a few MM of PLA between the antenna and sky did not seem to have a negative affect. Cold fixes still took ~30 seconds and warm/hot fixes were essentially instant. These uBlox GPS modules are extremely impressive.

I realised a much more compact case could be designed with these things in mind.

![Antenna, USB-C & Mount](https://lh3.googleusercontent.com/pw/AL9nZEUH2EKD2-1f0F21jSIyIIVNFv9puAIl2byMBN4E9NkbwvTlk0FRm1VcVydfykWC2uwC45eBLye4LqrmaHYxsjJcVcx_ytxM-zlZRPJ8T6iKEsbWxzgYsgXx7OzlwrBtbqzTSvpEFbW3TttAAfJDsdycxQ=w1218-h685-no)
My second attempt brought the antenna down to a horizontal offset orientation and added a 1/4-20 UNC threaded insert to the case back, as commonly found on cameras and mounts. I knew this would make available plenty of cheap mounting options for the unit.

Additionally, the two-part case now featured threaded holes and bolts for a more secure fitment. The control board was positioned such that the USB-C port faced the bottom of the unit and sit flush with the case exterior.

![Nice & Compact](https://lh3.googleusercontent.com/pw/AL9nZEXzHoMWFugFEaukrIKPF3DisVsMgfAAQw1mUw9zZrg2yEbrBEzFCjNkWpXjxLHTCmEnfy1ifzeHOwb_br-GWzCltmb1_m2KZ7wAzPEQZsw08jEgJ1fOmqptpIn8H7NuqLnIfaKXlfkhkQiakWZqOCEXQg=w1218-h685-no)
It still used the same display, but now with a tighter less rounded bezel. I was particularly pleased with the form factor of this design, but the internal wiring proved to be fragile; it broke multiple times as I re-assembled the unit during testing and tweaking. I was also unhappy with the display. It functioned fine; but I wanted more flexibility in the output (for example, the ability to display graphics and to independently dim selected characters).

I started shopping for full-color and LED matrix displays with a suitable form factor.


### Third & Final Prototype
![The Third Prototype](https://lh3.googleusercontent.com/pw/AL9nZEWuXZi2AbCZXYrENusYFnW3WGtLqdEAK5t1ulbxdTnJ-khgkaymD4F1cG36oqieg4MgsYoSBgZDdnvPJD7b6_CZc-_xvKf6IAqSusHgLp__UM5nrYx7wnOJwMBb5mri5tLKLyfM3lL1eiPxyrK6P-wzIw=w1218-h685-no)
My search revealed a couple of Matrix-style displays, but the best choice seemed to be the Adafruit LED Charlieplexed Matrix; a 9x16 array of individually-addressable single-color LEDs. Like the segment display, this is an I2C device; but offers much more powerful control of its output.

The form-factor also allowed me to design a one-off protoboard circuit that would interface the controller and GPS module with the display in one very robust stack, with no danger of fragile wires breaking inside the unit when bumped. This was an especially satisfying thing to design and build, as the achieving the required wiring was a satisfying puzzle to solve.

![The Board Design](./resources/Board.png)
I switched to using an Arudino Nano clone with USB-Mini connector, as the larger footprint ironically made the layout much easier; and the XIAO was overkill for these purposes.

Although the controller and display were soldered together effectively permanently via the protoboard (in the interest of keeping the unit slim), I was able to keep the GPS unit socketed. This also provided just enough space for the controller to sit underneath it.

The LDR sits vertically out of the board, carefully set at the correct height to meet the case wall.

![Powered Matrix Display](https://lh3.googleusercontent.com/pw/AL9nZEUpVZeNUJ7qgt32t_tBU-6Rusb0F5cGxMJz6HkSVvUti3fDI4QCYkY1xCFyDc0lOUasloIhPQc5btfWu6LZ7T92YCPxhJu7kw1VxbDA-CkwDMdWDtmCXciQdz7CtEWR0EIgWbYvULj601HLStClBGyuOg=w1218-h685-no)

![Laser-Cut Grill](https://lh3.googleusercontent.com/pw/AL9nZEVc9MpxaaMUrXxcoyu_tq_Y_19wH4K75Way4MlbEEWKhsjgdWx9agsaA-Ady-qhjhtLzXvCM3E2tuSfy-ZO0OUHfRGPBUzUIWOnuWVBcUxhWJy92aNJ0SUFXZS80ZXxyR1TJtFO8GSuu5m5oNysPW3I8A=w1218-h685-no)
The matrix display looks great, but is ill-defined without some kind of mask to separate the LED pixels. I'd need a fine-pitch grill to sit in front of the display.

While my Flashforge printers can achieve a decent fidelity, they struggle with fine detail on the base layer. Rather than try to print the grill as part of the case, I used my low-cost Diode laser to cut a separate piece out of thin black acrylic. While not perfect, this came out much better than a printed part would have. I was able to manually clean up the holes to achieve a pleasing result. This part sits inside the front of the printed outer case, sandwiched in position by the display itself.

![3D Printed Case, Suction Mount](https://lh3.googleusercontent.com/pw/AL9nZEWPppN3bW_pbWOTxBut_BjwavRLeuX1jIyR98AA18vy1dCgbhW0Xi8fNJo9Wv-IIaQGH2_jzbrg55LK2kuwkG6E2NOT6MxSbR4kD63u06shJQsrUp2f6qKqUSRhOH2cUzm_582XxgmA-ZY1SGKvt8LhRw=w1218-h685-no)
The final case design is not quite as slim as the second prototype, but accommodates a more pleasing display and a friction-fit ball socket for use with a Garmin mini suction mount I already had to hand. This provides a more stable fitting for the unit and a much more professional look; most of the camera suction mounts I'd planned to use with the second prototype were far larger and ugly by comparison.

![The Garmin Ball Mount](https://lh3.googleusercontent.com/pw/AL9nZEX8c5rkMx74oteEmTB61oamYyfQTp7mVVj_9YpgnlbGkgwIgT9OGzBIKKp-RH4EttFNmMJiTwMx2NGdMl-h0bMeAgZjGsr3fukyL5nxgtdSVQ_tKBQlk8e-bKD8bC_DlESNLBP27TgWVyxzrNiqqieX6w=w1218-h685-no)

### Performance
![The Garmin Ball Mount](https://lh3.googleusercontent.com/pw/AL9nZEUTHyvRMCjZRqXODT4zbm5jWGcslcqbySO_pqPrsK6UHZxSik9z7NbpIRpcP3cmzQXvlLo1mp9hqbrs3OWWQOjU1N5OC9YfKZJPI_QKRUmq8YBh3ENTZ9UfIANjViLcDcjjNW1QXPdYhhpVQzHqjSoo4Q=w1218-h685-no)
I couldn't be happier with the way this one turned out. The speed reporting is perfect; I've yet to encounter an issue with signal strength or creeping/flucutating speed values.

This is a dramatic improvement over the 370z's stock analogue speedometer; particularly when moving between the S2000 (with its factory digital speedo) and the 370z.