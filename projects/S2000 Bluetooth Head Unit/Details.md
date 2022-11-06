### Background
Any system I installed would need to continue working like the factory head unit, so the audio control buttons would still need to work as expected. I also wanted the installation to look as stock as possible; and most importantly, be completely reversible.

That meant solving two problems:
- How to get the button presses to control my device without modifying the car’s wiring in any way (and preferably without needing to take the dash out)
- Fitting a bespoke device (car-pc, tablet, whatever…) into the car’s dash without modifying the car in an irreversible way

The former is reasonably straight forward: the car’s head unit connector already gives us access to the speaker drivers *and* the required pins on the audio control board, so if we can interpret those, we can get away with just modifying an aftermarket harness adapter and swapping out the existing head unit with our replacement device; no wiring needed.

For the latter, I bought a couple of used original Honda parts from eBay to modify. I managed to get a complete and like-new audio control unit (with working board, buttons, lights; everything...) for just £10. I’d experiment with this when working on my circuit board design and Arduino code.

I also purchased a stereo fascia trim piece for £25. This is the basis for my phone cradle. By modifying this, I end up with a simple slot-in replacement unit. Unfortunately this does limit the extent of my ‘head unit’ to the confines of that small piece of trim; there really isn’t a huge amount of space in the dash to work with. This was one of the deciding factors in making a phone cradle rather than a tablet or full-on touchscreen car-pc.

### Implementation
![Later Prototype Board](./photographs/DSC_0097.jpg)
I've been through a few iterations of this concept, refining the design each time.

The latest version is based around an Arduino-like ‘Pro Micro’ device, a Bluetooth audio receiver module (based on the Qualcomm CSR8645) and a Qi charging plate integrated into a factory stereo fascia.

> Photographs shown throughout this write-up include earlier prototypes of the board, so vary in design and functionality. The 'final' board circuit design is included at the end.

Prior versions incorporated stereo amplifier board (based on the TPA3116D2), but I later decided to rework the design to make use of a compact external amplifier ([Pioneer GM-D1004](https://www.pioneer-car.eu/eur/products/gm-d1004)) for more flexibility and power.

![Pi Screen Doesn't Fit](./photographs/DSC_1372.jpg)
The total parts cost is around £30-40; not counting the amplifier or sacrificial fascia purchased to create a ‘dock’ for my phone (about £20 used on eBay). I actually bought an entire driver's side console (complete with audio and heater controls) to experiment with; but that's not necessary to replicate the build.

Initial ambitions were to find a large touchscreen and do a full car computer build; but the S2000 stereo space is tiny and I couldn't find a screen of a suitable size. It would need to be a letterbox-style display; and while I could find many of these from China, none had capacitive touch screen overlays available.

After trying (and failing) to find a way to make available displays fit, I settled on using a large-screen Android phone instead; in conjunction with a bespoke ‘dock’ based on the purchased fascia piece. An Arduino-based interface board would allow the phone to play music through (and be controlled by) the car’s existing audio system. Importantly there would need to be no cables to connect when docking the phone, so I choose wireless Qi charging and Bluetooth audio and control.

![The ALPS Audio Board](./photographs/DSC_0046.jpg)
My first task was to work out how to interface the phone with the stock audio controls. I've done this before with other cars; most use a resistor network for their wheel/dash audio switches and the S2000 is no different. Behind the factory audio control buttons there is a rather lovely ALPS circuit board. Pins from this run into the audio harness, which is routed into the single-DIN stereo opening.

I initially experimented with my spare board to establish how it behaved (particularly with respect to the **MUTE** function, detailed later). However the official service manual also includes a circuit diagram and reference values, which I later made use of.

![Experimenting With Early Prototype](./photographs/DSC_0022.jpg)
The board has 6 helpfully labelled pins:
- **GND** is the ground reference for REMOTE, MUTE and ACC
- **REMOTE** offers a varying resistance value (with respect to **GND**) when each of the **CH**, **VOL-**, **VOL+** and **MODE** buttons are pressed, by closing switches across a resistor network
- **ILL-** and **ILL+** power the backlight circuit, which consists of a number of incandescent bulbs behind the buttons. I’m unsure of why this has a ILL- pin and doesn’t just use GND; but we don’t care about these for this project anyway
- **ACC** is switched battery positive (12~14V); meaning it is only powered when the ignition is on
- **MUTE** is toggled between high (12-14V) and low (0V) when the button is pressed. A small IC on the board handles the latching and a green status LED

![The Factory Harness](./photographs/DSC_0004.jpg)
The **REMOTE** and **MUTE** pins make their way out to the harness connector {WIRE COLOURS?}, so we don't actually need to modify the factory wiring or control board. I purchased a third-party harness adapter (designed for aftermarket stereos) which gave me an easy way to fabricate an adapter to wire into my control board.

#### Resistor Network & Reading Values
The premise of a resistor switch network is that it permits multiple buttons to operate over a single wire. Essentially each button is connected to **GND** and **REMOTE** by a resistor of a unique value. When a button is pressed it closes the circuit, changing the total resistance between those pins to that of the unique resistor value. By creating a simple voltage divider circuit at the other end (our Arduino), we can use its ADC to measure the resulting voltage. If we know what value ranges represent which buttons, we can have the Arduino respond to these button presses.

![Measuring The Values](./photographs/DSC_0018.jpg)
The S2000 service manual does note what these resistance values should be; but I'd need to convert these into `integer` values from the Arduino's ADC. Since I now had a harness adapter, the best way to do this is simply hook up an Arduino with a simple `analogRead()` loop and observe the values reported from the Serial monitor.

This also allowed me to evaluate how large my ranges would need to be to accommodate noise and variations in the resistance values (e.g. due to temperature). As it turns out, the variation was quite large. I ended up with button readings of `0`-`20`, `20`-`60`, `60`-`160` and `160`-`350`.

The full Sketch would need to also allow for the mechanical nature of the buttons and apply *debouncing*. Such a button doesn’t *instantly* close a circuit when pressed. It actually takes time to settle into a 'closed' state, and the resistance value you read will fluctuate while this is happening. If not handled correctly, this could manifest as multiple or incorrect button presses where only one was desired.

This is handled in my code by simply averaging readings over time and waiting for a minimum period of time with the button ‘depressed’ before triggering a button press action. There are extensive comments in the code regarding how this all works, if you’re interested.

#### Bluetooth Control
![CSR8645-Based Module](./photographs/DSC_2017.jpg)
The Qualcomm CSR8645-based bluetooth module I’m using was chosen primarily because it offers a number of pins for sending playback commands. Bridge any one of the command pins to **COMM** and the module will fire the appropriate command on the host device. A module with serial control would have made the circuit board a lot simpler, but so far the only one I’ve found with this feature had other deficiencies that made it unsuitable. Most of the CSR8645-based modules I’ve tried have their serial communication either disabled or not broken-out for reasons I don’t understand.

There seem to be dozens of different third-party I/O boards for this module; all with different features. Most of these cheap Bluetooth modules are very 'chatty', in the sense that they often have very awful Engrish spoken notifications for things like re-paring and input switching. I got lucky and found one that just had (loud) beeps instead.

Audio quality is good enough for the use case here. High fidelity it is not; but as good if not better than most aftermarket head units with Bluetooth input. Ideally I'd use an LDAC-capable module, as my Sony phone supports this; but they tend to be physically larger modules (and 5x more expensive).

![Opto-Coupler Array](./photographs/DSC_0088.jpg)
I decided to use opto-couplers as an interface between the Arduino and the bluetooth module. When the Arduino sets the appropriate pin ‘high’, the opto-coupler is powered and the relevant command pin is shorted to **COMM** on the bluetooth module. Each pin has its own opto-coupler; however the resistor used to reduce the 5v Arduino pin output to something the opto-couplers can handle is shared between them (on the ground side); the logic being that only one opto-coupler will be active at any given time, saving board space and component count.

Holding the 'Audio Control' button on the S2000 dashboard also holds-down the 'Play/Pause/Pairing' pin on the bluetooth module, putting the module into pairing mode with an audible beep.

#### Implementing Muting
The **MUTE** pin on the S2000 control board is latched `high` when the mute is activated and `low` when not. The current version of my interface board just provides line-out audio to an external amplifier ([Pioneer GM-D1004](https://www.pioneer-car.eu/eur/products/gm-d1004)), which thankfully supports this kind of mute signal; so it is passed through the harness adapter to the amplifier unmodified. However the button is inverted from normal; while the mute LED is illuminated, the amplifier is unmuted; otherwise muted. This isn't really a problem.

Prior versions of the interface board had an on-board amplifier module, so needed extra I/O to accept and output a mute signal compatible with the module. I've since designed a revision of the interface board that retains this functionality to support more external amplifiers and potentially flip the output for non-inverted operation, but haven't had reason to build it.

#### Power & Noise
![Power Regulation](./photographs/DSC_2014.jpg)
The 'Pro Micro' Arduino clone used in the current design operates on 5V. It *does* have a wide-input regulator that can supposedly support *up to* 12V (more like 9V in reality) on the **RAW** pin; but the supply voltage from the car can easily exceed 14V.

I designed a simple regulated power circuit for the 5V controller (and another for the 12V Bluetooth module) based on the adjustable version of the LD1117 regulator. These sit underneath the Bluetooth module, including resistors to adjust voltage and a capacitor to smooth the output. Using a single adjustable version reduced the unique parts count. They provide plenty of power to each device.

![Earlier Prototype With Capacitor](./photographs/DSC_0133.jpg)
One of the biggest problems with putting electronics in cars is the huge amount of noise and variation in the power supply. During ignition the car's **ACC** voltage drops enough to power-cycle the bluetooth module. To prevent this from happening, I added a capacitor bank across the fused side of the 12v ACC and GND lines. These allow the interface board (and attached modules) to survive cranking without disruption. As a precaution against the caps discharging back into the car battery or other devices, I added a diode to the input line. 

The current interface board uses an FQP30N06L (logic-level power mosfet) to control power to the Bluetooth board. The idea is that the microcontroller can choose to switch this off (or keep it off until after cranking) to prevent it from attempting pairing or playback before the power supply has stabilized. This isn't strictly needed though, and later (unmade) designs removed it.

![Simple Fuse Holder](./photographs/DSC_0155.jpg)
A low-profile blade fuse holder of my own design sits between the interface board and harness connector, using modified spade connectors as sockets for the fuse legs. A 3D-printed case is glued around these once they're soldered into the harness wire. Some earlier pictured prototypes used different holders, or relied on the existing stereo fuse. You can buy ready-made holders of similar design to mine, but they almost always have captive wires that you'd have to replace to use inline with a harness adapter like this.

![Wireless Charging Pad](./photographs/DSC_0113.jpg)
The wireless charging pad is a Nokia DT-900; chosen because it has a simple flat shape that would be easy to integrate, three overlapping charging coils that allow it to handle phones of different sizes and coil positions, and despite being a quality certified product, it's incredibly cheap at only £6; so potentially breaking it wasn't a concern.

I modified the original pre-owned fascia I'd bought to fill in the gaps originally left by the door mechanism. The charging pad was then recessed into the front and sealed in with more filler. A locking power connector was embedded into the back, to which a small adjustable voltage regulator module is connected.

![Fitting The Leather Cover](./photographs/DSC_0138.jpg)
To roughly match the trim inside the car, I covered the lower half of the fascia with a dark grey leather. This would provide a harder-wearing surface than *paint* and a slight cushion for the phone, while still permitting wireless charging. A 3D-printed and painted shelf is bolted into the bottom to support the phone. The top of this contains a rubber lip that helps keep the phone from sliding out.

I later added two rubber pylons in the top left and right corners to hold the phone more securely.

#### Interface Board Design
![One-Off Interface Board](./photographs/DSC_0100.jpg)
As with all projects requiring a one-off board, I designed this in Fireworks MX2004. I find this much easier and more flexible than traditional circuit design software. I had no intention of having a proper PCB manufactured, so using an unusual application/format wasn't a problem. I use double-sided matrix board (with vias), so have two 'layers' to work with.

Working out a suitable route for the circuit is a fun puzzle; particularly within a limited space. I've included both the latest version of the board that I've assembled, along with a refined prototype that I haven't.

![Current Design](./resources/Interface%20Board,%20Current.png)
Earlier versions placed a small stereo amplifier module on the rear side of the board, opposite the Bluetooth module on the front. This complicated the design considerably. I ended up removing this and simply routing the line-level output of the Bluetooth module to an external amplifier.

There are various additional headers that aren't strictly required, but offer more flexibility for debugging and adding future functionality.

> Note that in this design the header 'sockets' for the Arduino and Bluetooth module are not *keyed*, so they could physically go in either way; but installing either incorrectly would almost certainly destroy the board.

![The Assembled Kit](./photographs/DSC_2010.jpg)
The additional mosfet(s) and opto-couplers related to power control and muting are not required, but may be desirable in other configurations. The bare minimum is the 4 opto-couplers for Bluetooth control and the two linear regulators. If you can find one with it enabled, a Serial-controllable Bluetooth module would allow you to directly communicate with the module with just the Arduino **RX** and **TX** pins and avoid the need for any opto-couplers at all (might need a level shifter though).


