import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div class="alert">
  Toolkit to Speak Out Against OCTA Funding Cuts to Metrolink
</div>

<section class="hero">
  <h1>SAVE METROLINK</h1>
  <p>
    Service cuts, fare increases, and long-term damage are on the table.
    Public pressure can still stop this.
  </p>

  <div class="cta">
    <a class="btn btn-primary" href="https://actionnetwork.org/letters/fund-metrolink-to-keep-transit-vibrant-and-affordable?source=direct_link&">Take Action</a>
    <a class="btn btn-secondary" href="https://docs.google.com/document/d/1gWLlyYa2d-7vLAkSdUPg4hxgd2EoYTsvh5cTyyw9eRY/edit?usp=sharing">Canvassing Script</a>
    <a class="btn btn-secondary" href="#">View Meetings</a>
  </div>
</section>

<!-- QUICK INFO GRID -->
<section class="section grid grid-3">

  <div class="card">
    <h2>📍 Board Meeting</h2>
    <p><strong>May 11 — 9:30 AM</strong></p>
    <p>550 South Main St.<br>Conf Room 07-08<br>Orange, CA</p>
  </div>

  <div class="card">
    <h2>⚠️ Crisis</h2>
    <p>$30M deficit threatens service + fare hikes</p>
  </div>

  <div class="card">
    <h2>🎯 Goal</h2>
    <p>Restore funding & prevent service cuts</p>
  </div>

</section>

<!-- FULL CONTENT -->
<section class="section">

  <div class="card">
    <h2>WHAT IS HAPPENING AND WHY ARE WE TAKING ACTION?</h2>
    <p>
    Metrolink is facing a $30 million operating budget deficit that threatens to eliminate mid-day, evening, and weekend service, shorten routes, and raise fares by up to 15% — as early as October 2026. A major contributor is OCTA's deliberate choice to cut $5.2 million in annual funding through 2030, despite the agency's own budget growing by over $300 million and its financial reserves remaining strong. This is happening at the worst possible moment: Metrolink just broke all-time weekend ridership records, had the second-highest ridership growth of any regional rail agency in the country between 2024 and 2025, Orange County is building more housing, climate change is an ever-increasing threat to our communities, and Southern California is preparing to host the World Cup and the Olympics — events that demand a functioning, world-class transit system, not one being actively dismantled. Cutting service now would trigger a death spiral — fewer trains mean fewer riders, less fare revenue, and even deeper cuts — undoing years of hard-won growth and abandoning the essential workers, students, and transit-dependent communities who rely on this system. OCTA has the power to stop this by restoring its full funding commitment, and we need to demand they do exactly that.
    </p>
  </div>

  <div class="grid grid-2">

    <div class="card">
      <h2>KEY LINKS</h2>
      <ul>
        <li>Action Items</li>
        <li>Email Template to OCTA and LA Metro</li>
        <li>Canvassing sign-up at Metrolink Stations</li>
      </ul>
    </div>

    <div class="card">
      <h2>ARTICLES</h2>
      <ul>
        <li>Metrolink is Facing Service Cuts - Take Action Now!</li>
        <li>Regional Rail at Risk: How Metrolink governance holds back modernization</li>
      </ul>
    </div>

  </div>

  <div class="card">
    <h2>KEY MEETINGS FOR PUBLIC COMMENT</h2>
    <ul>
      <li>May 11 — Full Board (9:30 AM)</li>
      <li>May 14 — Transit Committee (9:30 AM)</li>
      <li>May 21 — L&C Committee (9:30 AM)</li>
      <li>May 21 — Finance Committee (10:30 AM)</li>
      <li>June 1 — Regional Planning (10:30 AM)</li>
      <li>June 8 — Final Budget Vote (9:30 AM)</li>
      <li>June 26 — Public Hearing</li>
    </ul>
  </div>

  <div class="card expandable">
    <h2>HOW TO START YOUR PUBLIC COMMENT</h2>
    <div class="content">
      <p>
      Before diving into the talking points, open with a personal statement...
      </p>

      <ul>
        <li>State your name and city</li>
        <li>Address your OCTA Board representative</li>
        <li>Explain how you rely on Metrolink</li>
      </ul>

      <p>
      "I take the Orange County Line to work..."<br>
      "I am a student who depends on Metrolink..."<br>
      "My family uses Metrolink..."<br>
      "I chose to live car-free..."
      </p>
    </div>
  </div>

  <div class="card">
    <h2>THE ASK</h2>
    <ul>
      <li>Reverse the $5.2M cut</li>
      <li>Reject fare hikes with service cuts</li>
      <li>Commit to long-term funding</li>
      <li>Recognize Metrolink as regional infrastructure</li>
    </ul>
  </div>

  <div class="card expandable">
    <h2>THE CRISIS (FULL DETAILS)</h2>
    <div class="content">
      <p>Metrolink is facing a $30 million operating budget deficit...</p>
      <p>Service reductions and fare increases could take effect as early as October 2026...</p>
      <p>Weekend service is the fastest-growing segment...</p>
      <p>This is a death spiral...</p>
    </div>
  </div>

  <div class="card expandable">
    <h2>THE REGIONAL DAMAGE</h2>
    <div class="content">
      <p>Gutting Metrolink undermines all regional transit...</p>
      <p>World Cup and Olympics demand functioning transit...</p>
      <p>SCORE investments become worthless without operations...</p>
    </div>
  </div>

  <div class="card expandable">
    <h2>OCTA FUNDING REALITY</h2>
    <div class="content">
      <p>Budget is $2.05B — cuts are only 0.29%...</p>
      <p>Strong reserves and growing revenue...</p>
      <p>This is a policy choice, not necessity...</p>
    </div>
  </div>

</section>
`;

setupCounter(document.querySelector("#counter"));
