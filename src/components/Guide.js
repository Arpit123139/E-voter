import "./guide.css";
import Guidedata from "./Guidedata"
import step1 from "../assets/1.jpg"
import step2 from "../assets/2.jpg"
import step3 from "../assets/3.jpg"
import step4 from "../assets/4.jpg"
import step5 from "../assets/5.jpg"
import step6 from "../assets/6.jpg"
import Navbar from "./Navbar";

function Guide(){
    return (
        <div>
            <Navbar />
            <div className="guide">
            <h1>GUIDELINES</h1>
        <div className="guidecard">
            <Guidedata
            image={step1}
            heading="REGISTER TO VOTE"
            text="Voter registration is not federally managed, meaning states and territories have unique requirements. Most states allow residents to register online, in person, or via a paper form, provided they are qualified to vote and meet the registration deadline. If a voter knows they won't be in their state at the time of an election, they can fill out the Federal Postcard
            Application for absentee voting."
            />
            <Guidedata
            image={step2}
            heading="RESEARCH POLITICAL PARTIES, CANDIDATES"
            text="Being an informed voter allows individuals to select candidates based A their stated platforms without relying on party propaganda or media coverage. By researching parties and candidates, informed voters are able to make knowledgeable decisions about who their votes support. The American Association of State Colleges and Universities offers a comprehensive guide to becoming an informed voter."
            />
            <Guidedata
            image={step3}
            heading="KNOW THE ISSUES"
            text="Once a new voter is familiar with the basic tenets of political parties, they are able to learn about the issues at stake during the election. Be it a presidential or city council election, candidates almost always share the vision for their time in office on their website. Voters should review this information and consider how it aligns with their personal beliefs about how
            government should function."
            />
            <Guidedata
            image={step4}
            heading="CHECK STATE RULES & REGULATIONS"
            text="Most voting stations are open at least 12 hours on election day, allowing students or those with busy workdays ample time to vote. Although only 35 states currently require voters to show a photo ID, first-time voters who registered by mail have other requirements. According to federal law, individuals who have not voted previously must bring a valid photo ID or a bill, pay stub, or government document showing their name and current address."
            />
            <Guidedata
            image={step5}
            heading="FIND YOUR POLLING PLACE"
            text="State election offices assign polling locations based on a voter's address, so students and others who aren't sure where to go to vote can either contact their election office or use Get to the Polls to find out where they should be. Information about state and local election offices can
            be found via the search tool on USA.gov."
            />
            <Guidedata
            image={step6}
            heading="CAST YOUR BALLOT"
            text="Gone are the days of hanging chads and delayed results, as states now use electronic voting systems, either optical scanning or touch screens on election day. Gizmodo provides a list of states and the type of machines used by each so students and other first-time voters feel confident and knowledgeable. Voters may not have to vote for every office on the ballot, and are also allowed a write-in if the candidate of their choosing is not on the official ballot"
            />
        </div>
        </div>
        </div>
        


    );
}
export default Guide;