### Background
The [Flashforge Finder](https://www.flashforge.com/product-detail/8) is a wonderfully simple to use and reliable 3D printer, primarily designed for classroom use. Its appearance is that of a refined _consumer-grade_ product, rather than the rickety extrusion-based designs of most low-cost printers. It was also a super cheap used buy on eBay. I now have two; one V1 and a V2 model.

Unfortunately one of the things that make it great for a classroom (the lack of a heated bed) also limits it to mostly printing PLA. It also requires adhesive to be applied to the build surface to reliably print large parts, and even then I've been running into warping issues.

A heated print bed removes the need to use adhesives, while also permitting the use of additional filament types; subject to the heating capabilities of the extruder.

### Implementation
There is only one unofficial 'upgrade kit' made for the Finder that I'm aware of; consisting of a silicone pad wired into a janky-looking thermostatic controller and an aluminum plate with a glass top. I decided to build my own, buying the same materials and shaping them to fit, as this would work out cheaper. I'd also be able to use a superior digital thermostat with a temperature readout and configurable settings.

![The Standard FSP Flex ATX PSU](https://lh3.googleusercontent.com/pw/AL9nZEXv08QRsXjNGr_zSmBCBLAZDkKpc2rhZrMN7lQhWAPQWGDNeOjs4LLgf-qSKTyHR61ItHWRuXaPcIG_DXeuqmJDUohHyITCk16pe8EwaNB21Hhj6FLpXtqNZBC2RRCv12bPLasfM4Ql1W7H-JmRB5iAbA=w386-h685-no)
I made this upgrade to the V1 Finder because it has an internal Flex ATX power supply that would be easy to drive the heating element and controller from; although I decided to swap out the FSP PSU with a higher-rated model from the same manufacturer. I wouldn't need to have a separate external supply for the bed (as the pre-made kit would require). I could also run a much safer 12V DC element instead of the 230/240V AC one supplied in the kit. Later Finder models run on a 24V external DC supply.

The standard FSP PSU is 100W with a single 7.5A 12V rail. The model I upgraded to is 220W with a 14A 12V rail, making it more suitable for driving the 120W heating pad, in addition to the existing printer load. I bought an ex-server item from eBay.

> After my inintial build, I had some reliability issues with the 220W FSP PSU. Despite the specification, it seemed incapable of providing the current required. I replaced this with a brand new [SilverStone 500 Watt FX500-G](https://www.silverstonetek.com/product.php?pid=935&area=en), a much more capable unit. Since then it has been 100% reliable. The hot end and bed also seem to heat up much quicker

![Testing The Wiring](https://lh3.googleusercontent.com/pw/AL9nZEX-vxzPX85pv_AwclM1eKPzdabr8yYA4KaWkHGkQSuM3xe5T1Y3pJOtM1FhHN2kWhpLf--QAuapmWctAJOUyaQAJdp62ph9sudPu1Ul72AYL9_fSYoN45O9rCq1Y_ArU7t3PUqT9nMQtEoJmhmFDz4y7w=w1218-h685-no)
The controller is little more than a temperature-controlled relay. It operates off a 12v supply and bridges two of its pins with the internal relay whenever the target temperature has not been met. By connecting the heating pad's power lines via these pins, the controller can active and deactivate the element. I put together a simple adapter harness using a couple of HDD Molex power connectors common to ATX power supplies.

![Replacing The Thermistor](https://lh3.googleusercontent.com/pw/AL9nZEVxRZBP1ZIiruwytVY2TCxtCP8BvxgILltFBrOmDiTbzyNO0oruCPEI7-FgxRkHmpPt7vltSFPPrTGhbAguNZhNvnaiCJ2vvhQgvqezGsPowrMBGRQafgSj9xxisi4CaEaXtSy4diTAcUZWKKuQ5Ng5Xw=w1218-h685-no)
The silicone heating pad I purchased had a built-in NTC 100K 3950 thermistor for measuring the achieved temperature; however the thermistor that came with the _controller_ was a 10K 3435 model, meaning the pad was going to be reporting incorrect readings to the controller if I hooked them up as-is. I ordered a few 10K 3435 thermistors, then replaced the pad's thermistor with one of these to make it compatible with the controller.

This was covered in thermal paste and taped up to provide a reasonable thermal connection. Of course the thermistor won't be reading the plate temperature but the _pad_, so there will be a delta between what the controller is seeing and the glass bed. The longer the element is running, the smaller this delta will become; but it will never be _zero_.

![Fitting The Laser-Cut Ply Frame](https://lh3.googleusercontent.com/pw/AL9nZEUiCGS4GzScuHdfTh0oSKXPAg83ugm4OXFRgC7GEsOsMNTSCAn_99eWZFQLOGxufYiK-id13Wj8oUb472nu4srAKK6VUJGv-kIbtz3_zCKdywm3g4LQFHwlE6a_l7FQEQrsI4h5_vGmZLaCb0Btpqzq8w=w1218-h685-no)
To keep the pad in place (as I didn't trust the adhesive backing) and to ensure optimal thermal transfer, I decided to laser cut some plywood frame pieces to sandwich the pad against the aluminium plate. The silicone pad is just small enough to fit between the three bolts that hold the bed onto the printer's z-axis gantry.

This would also provide great insulation between the bed and heating element and the plastic gantry below, which could potentially be affected by the heat if left unshielded.

![Shaping & Drilling The Plate](https://lh3.googleusercontent.com/pw/AL9nZEVevHiw0Q1SOz6ON8AHVSgK6Az7d0Zi6vfomn6_Ci_mS28d8OvcP17ufCEPjMUpVaQo0QX4N209Sh0e6iovAQHUDY-SaU7wcWBuMn1wwAJdmnj4u6ENtsyy4TPseq6vkiOONUKpXi4FHJY5pYXF9XvgBQ=w1218-h685-no)
I'd ordered the 4mm aluminium square plate in the correct size, so the only thing I needed to do was clean up the edges, drill the holes and mount some kind of retaining parts to keep the glass plate in position. I was hoping to braze tabs onto the plate using low-temperature welding rods, but quickly realised the large plate was radiating away any heat applied to it; my blow torch just wasn't capable of applying the heat required.

Instead I used water-activated Gorilla Glue. This seems to hold the aluminium tabs on well enough for my purposes, but it wasn't as neat as I'd have liked.

> I made the glass plate easily removable as I'd expected to have to remove it regularly. As it turns out, the plate hasn't had to be removed since construction; it holds parts perfectly during a print, but they come away easily when finished. I haven't had to clean it either - printing on heated glass is awesome. In hindsight I wouldn't have bothered with the aluminium tabs and just used picture clips instead

![Testing The Controller](https://lh3.googleusercontent.com/pw/AL9nZEX6mAbfAZRc42f5nAGGZbGvPZgzspp8MLJsy41mhLDJ-X21bAqkPw7MPEmB5h2XhYloRxz4UZc6qbC2aI2t9xZSmK8CHLEHcTfWMx0aIlclxlVZ2L0BDSQ5WSPj1YmP4US15Sr5bqjbYOvRLW_Ra8qC-g=w1218-h685-no)
With the bed parts constructed I rigged up a test circuit with the temperature controller to ensure everything would work. They're rather simple but clever thermstatically-controlled devices. You can define a maximum temperature, a target temperature, how much of a delta is permitted before the heating is re-engaged - everything you need for a basic heated bed. Obviously this would not be talking to the printer controller, so I'd need to set a reasonable temperature for general printing and leave it at that. I found 70&deg;C works really well; although this is likely near the maximum capability of the heathing pad anyway.

With the termistor sensor in the pad already replaced, I could just hook it up directly to the controller, along with the power output. A mechanical relay inside the controller enables power to the heater while below the target temperature, then removes it once reached (subject to a configurable delta threshold).

![Panel-Mounted Into The Base](https://lh3.googleusercontent.com/pw/AL9nZEUhUMwNXF2nh3kEXRTSgdkpXquHvf9fciTR_Rf5kbaTEHr2gwocdB7bYHu-xi5_FxjLNJFhrYSTiywdCd7MA2UvZ3tnOt9WYX7Rcaei1litM8yM36ImmysAe1r4uovO0pVDs82dydOYsvAoV31RuLs5Og=w1218-h685-no)
The PSU already had spare ATX/Molex 4-pin power connectors to plug into, so I cut up a spare driver power cable and wired this into the controller, via an extra on/off switch so I could control power to the bed easily and separately from the printer itself.

The controller and switich are both designed to be panel-mounted, and the base of the printer happens to have _just_ enough space to accommodate the former. This makes for a pretty neat and entirely integrated installation, with no external PSU, controls or additional power cables.

### Completion & Thoughts

![Installed & Working](https://lh3.googleusercontent.com/pw/AL9nZEWPr5BHZC7bAG0s2PHlIB2HgqcF6PUuTJ_TP7kZSpww-TGfkWCrHbVjubBtF8IG2tzKzQyh8qagLg9fd8iQar3P95ajuNZ69g0fq2ynZwuvZXDP5aHZspR7AAHsL2-uy7Z8QiCW5o133HsVxlwQb2tz2g=w1218-h685-no)
This was my first time printing directly onto a heated glass bed, and has been something of a revelation. The factory Finders _do_ have glass beds (underneath an adhesive printing surface which I'd removed), but I'd not anticipated the difference heating the glass makes. Without any adhesives applied (but a hot bed) the glass feels 'sticky' to the touch, and prints cling to it very well. I've had _no_ failed prints at all due to warping since the bed upgrade. I can't express how much better it is not having to apply and clean-up glue for each print.

This is a modification that was absolutely worth doing. I think it came out great and with a little refinement could be mistaken for a factory feature. With a less excessive PSU, this could be done for less than &pound;100.

The only issue I did have was the pre-owned FSP PSU just didn't seem to be up to the task. I had some odd power issues that I concluded must be down to overloading the PSU. I looked at higher-rated FSP models, but in the end just thought _sod it_ and bought a new [SilverStone 500 Watt FX500-G](https://www.silverstonetek.com/product.php?pid=935&area=en), which is a top-end gaming model and _complete overkill_ for the task. Since then I've had no further power issues, as you'd hope. They make a 350W model that would probably be fine too.