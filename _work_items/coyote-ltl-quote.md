---
layout: work-item
title: "Coyote LTL Quote"
description: "A less than truckload (LTL) quoting and shipping tool so Coyote Logistics could remain competitive in the market."
tag: case-study
order: 5
featured: ltl-1.png
---

<section class="grid grid-cols-12 gap-10 text-xl pb-20">
	<div class="col-span-12 md:order-last md:col-span-5 lg:col-span-4 lg:col-start-9">
		<aside class="text-black p-8 rounded bg-illuminating-200">
			<table>
				<tbody>
					<tr>
						<th class="font-bold pr-6 text-right align-top">Client</th>
						<td>Coyote Logistics</td>
					</tr>
					<tr>
						<th class="font-bold pr-6 text-right align-top">Media</th>
						<td>Website</td>
					</tr>
					<tr>
						<th class="font-bold pr-6 text-right align-top">Role</th>
						<td>Designer, Front-End Developer</td>
					</tr>
					<tr>
						<th class="font-bold pr-6 text-right align-top">Date</th>
						<td>Summer 2015</td>
					</tr>
				</tbody>
			</table>
		</aside>
	</div>
	<div class="col-span-12 md:col-span-7">
		<p class="mb-6">Coyote was losing significant business because it lacked a less than truckload (LTL) quoting and shipping tool. I worked with a Business Analyst, a Product Manager, an overseas development team, and various stakeholders&mdash;some familiar and others brand new to the world of LTL. The tool was built over the course of 4 months within Coyote.com, Coyote's web app for shippers and carriers.</p>
		<p>The requirements shifted often, first as a tool for potential customers to quote shipments, and later restricted to customers already partnered with Coyote to quote and book LTL shipments. My role included requirements gathering, user testing, front-end development, and design.</p>
	</div>
</section>

<section class="grid grid-cols-3 gap-10 py-20">
	<div class="col-span-3 md:col-span-1">
		<h2 class="text-4xl font-bold mb-6">Sketches</h2>
		<p>Even though the business had a tight timeline of three months for development, walking stakeholders through paper and pen sketches exposed the lack of shared knowledge and unified vision for this tool. It forced the stakeholders to come to an agreement on what would and would not be included. Eventually, the quick quote for unauthorized users was cut from this project.</p>
	</div>
	<div class="col-span-3 md:col-span-2 grid gap-10 grid-cols-2">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-sketch-1.jpg" alt="LTL Quote Sketch 1" height="2000" width="1467">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-sketch-2.jpg" alt="LTL Quote Sketch 2" height="2000" width="1533">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-sketch-3.jpg" alt="LTL Quote Sketch 3" height="2000" width="1534">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-sketch-4.jpg" alt="LTL Quote Sketch 4" height="2000" width="1539">
	</div>
</section>

<section class="grid grid-cols-3 gap-10 py-20">
	<div class="col-span-3 md:col-span-1">
		<h2 class="text-4xl font-bold mb-6">Wireframes</h2>
		<p>Early on we decided on a step form wizard. While I was designing workflow for this, our in-house development team started work on implementing a 3rd party API to collect and present carrier quotes. Combining the team's API findings and the stakeholders' evolving requirements based on mockup discussion and feedback meant much time was spent adding, moving, and removing fields from our form.</p>
	</div>
	<div class="col-span-3 md:col-span-2 grid gap-10 grid-cols-2">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-0.png" alt="LTL Quote Moqup 1" height="768" width="839">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-1.png" alt="LTL Quote Moqup 2" height="768" width="839">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-2.png" alt="LTL Quote Moqup 3" height="768" width="839">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-3.png" alt="LTL Quote Moqup 4" height="768" width="839">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-4.png" alt="LTL Quote Moqup 5" height="768" width="839">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-5.png" alt="LTL Quote Moqup 6" height="768" width="839">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-6.png" alt="LTL Quote Moqup 7" height="768" width="839">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-7.png" alt="LTL Quote Moqup 8" height="768" width="839">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-moqup-8.png" alt="LTL Quote Moqup 9" height="768" width="839">
	</div>
</section>

<section class="grid grid-cols-3 gap-10 py-20">
	<div class="col-span-3 md:col-span-1">
		<h2 class="text-4xl font-bold mb-6">Early Design</h2>
		<p class="mb-6">I built a working prototype on Bootstrap that roughly matched our app and began user testing various form designs. Initially, I designed a step that combined pickup and delivery details with the summary but user testing proved this to be quite confusing so each step was moved to its own page.</p>
		<p>This design also featured an unrefined version of the timeline that had navigation issue during user testing so a new design was implemented that improved on this slightly.</p>
	</div>
	<div class="col-span-3 md:col-span-2 grid gap-10">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-initial-3b.png" alt="LTL Quote Initial Design" height="1093" width="1200">
	</div>
</section>

<section class="grid grid-cols-3 gap-10 pt-20">
	<div class="col-span-3 md:col-span-1">
		<h2 class="text-4xl font-bold mb-6">Final Design</h2>
		<p class="mb-6">Once the API requirements had been resolved, the Pune team built out a rough version of the step form wizard which I later refined and added animations and transitions to. I also ran a few user tests and revealed usability issues regarding shipping to an already saved address verse creating a new one which was worked out.</p>
		<p>The tool was released first to a limited set of beta users and later to all of Coyote's shippers. It's now being used countless times daily.</p>
	</div>
	<div class="col-span-3 md:col-span-2 grid gap-10">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-1.png" alt="LTL Quote Final Design 1" height="996" width="1200">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-2.png" alt="LTL Quote Final Design 2" height="1033" width="1200">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-3.png" alt="LTL Quote Final Design 3" height="1033" width="1200">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-4.png" alt="LTL Quote Final Design 4" height="1033" width="1200">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-5.png" alt="LTL Quote Final Design 5" height="1033" width="1200">
		<img loading="lazy" class="rounded shadow-xl" src="/images/projects/ltl-6.png" alt="LTL Quote Final Design 6" height="957" width="1200">
	</div>
</section>
