### Background
The [Sliger CL530](https://www.sliger.com/products/cases/cl530/) (and [CL520](https://www.sliger.com/products/cases/cl520/), which is a thinner version of the same design) are attractive ITX computer cases intended for HTPC use.

I happened to pick up both models on eBay while looking for slimline ITX cases for my next build. Unfortunately the stock brushed-aluminium fascia looks a little naff; and completely out of keeping with the rest of my equipment and furniture.

As such, I decided to replace it with a simple wooden fascia. This turned into a more elaborate project once I had a request to make another...

### Implementation
![Arranging The Blanks](./photographs/DSC_1295.jpg)
A while back I bought up a selection of Oak from a closing-down workshop. This included a large number of pen blanks; small squared-off sticks intended to be used on a lathe. Since I don't currently have one, they've sat unused.

This seemed like a good opportunity to use them; arranging such that I had a more interesting pattern than just a solid block of wood. Since they were pre-squared, it was just a matter of arranging, gluing and clamping. Unfortunately they weren't quite as consistent in size as I'd hoped, so there would be considerably more sanding required than anticipated to flatten the glued-together fascia.

![Gluing Together](./photographs/DSC_1299.jpg)
After picking out a selection of grains that seemd to compliment one another, I placed them in roughly the right positions (using the original fascia as a template) and marked/numbered them. These would just be glued together and clamped; no clever joins or dowls. To make clamping easier (and reduce waste), I assembled the blanks in three stages; first one half, then the other. The furthest corners were left until the end, so I could use a single strip (cut in half) to fill them out and cover the area required.

![Marking Out](./photographs/DSC_1129.jpg)
Once thoroughly dry the rough piece faces were sanded heavily to remove the glue residue and flatten the surface, which was slightly irregular due to the pen blanks not all being the same size. The outline of the original fascia was then re-marked onto the sanded surface for cutting and drilling.

I tried to arrange it such that the button hole would be intersected perfectly by one of the joins. Once trimmed down on a bandsaw, the edges are refined with a belt sander.

![Testing The Fit](./photographs/DSC_1134.jpg)
The hole for the button is cut and recessed with a forstner bit. The wider recess on the back allows enough space to add and tighten the nut on the back of the push-button switch. I test-fit the switch before going further. Rather than re-use the provided silver switch, I've obtained a black version of the same size/profile. This compliments the Oak far better and goes with the furnishings in my home.

With the fit confirmed, I proceed to sand down the surfaces with progressively finer grits.

![Applied Danish Oil](./photographs/DSC_1138.jpg)
This is followed by the same finish I apply to all of my Oak projects; Danish Oil. This is just rubbed in with a cloth. In this case it's just an internal decorative piece, so I only apply a couple coats. It enhances the natural grain of the Oak while providing a protective layer.


The factory fascia is just stuck on with double-sided tape, so I used the same method. I understand in more recent models the facisas.

> One of the wierd things about these cases is there have been at least two revisions; one to correct a major fitment issue (which unfortunately both of my cases have) and another to change the fascia mounting. However Sliger don't acknowledge this on their site; they even have a 'Rev Control' section explicitly stating there have been no revisions, which is untrue

### Making Another (With Front I/O)
Having posted pictures of the first fascia on the [Sliger Sub-Reddit](), I was contacted by another case owner wanting the same thing for theirs; only with front I/O. Having enjoed the first build, and considering adding I/O to my own fascia, I agreed to assemble another for the Redditor.

This would be more of a challenge as the I/O needed to be discreet, but still fit without needing modification to the case itself. I found an affordable 3.5mm I/O component with internal USB3 and power connections from which I'd pull the circuitboard and make my own frame/carrier to fit into the wooden fascia.

![Second Fascia Assembled](./photographs/DSC_1312.jpg)
The first step was to create another identical wooden fascia using more of the pen blanks. This didn't take long and I think the grain patterns on the second are even better than the first. Unfortunately one of the blanks used wasn't perfectly square, which left a slight glue line in the fascia. I decided to cut out the bad piece, re-sand the joining faces and add another in, which increased the time it would have otherwise taken; but I wanted the end result to be as refined as possible.

![Prototyping The IO Frame](./photographs/DSC_1325.jpg)
The challenge here would be to design and construct a frame to robustly and discreetly hold the I/O board inside the wood. After measureing the board I used Sketchup to recreate in in 3D and design a 3D-printable frame to hold it.

The prototype fit well; but I realised the cable routing was going to be a problem. I'd have to move the whole assembly own to the bottom corner, which meant changing the mounting holes. While redesigning the frame, I decided to move to a laser-cut acrylic assmebly, as this would require less post-processing and gave me an excuse to use the laser cutter/engraver I'd recently picked up.

![Cutting The Acrylic Parts](./photographs/DSC_1348.jpg)
The cutter is a NEJE Master with a '20W' module; for some reason Chinese manufacturers and sellers typically advertised their modules by _input power_, not _optical output_. It's actually more like 5W; but that's plenty for the 3mm black acrylic I'd be using.

I re-designed the frame with this material in mind in Sketchup and exported the plate outlines in the SVG format for Lightburn. This would send the required GRBL commands to the laser.

![Welding The Frame](./photographs/DSC_1355.jpg)
The cut parts have a slightly burred edge which I'd clean-up later. But first I assembled and 'welded' the acrylic pieces with _Plasti-Weld_, which effectively melts them together for a bond as strong as the acrylic itself. A set square is used to ensure they go together at perfect 90&deg; angles.

The constructed frame has a much cleaner surface finish than the printed protoype, but I still sprayed it with filling primer and finished with fine grit sandpaper before re-spraying a matt black, concealing the joins.

![Testing The Fit](./photographs/DSC_1381.jpg)
I'd have to use a router to remove the footprint of the frame from the back of the wooden fascia; plus an area behind it to permit the cables to run out of the back and through the case front (which has a small slot in it used by the factory I/O option). Getting this right needed care, as it would have been easy to go too far and ruin the entire fascia.

![Fitted To The Case](./photographs/DSC_1388.jpg)
![Packing Up & Sending Off](./photographs/DSC_1405.jpg)