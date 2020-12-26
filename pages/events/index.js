import Link from 'next/link'
import HeaderSocialLinks from "../../components/header-social-links";
import Footer from "../../components/footer";
import Nav from "../../components/nav";

export default function Events() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <HeaderSocialLinks/>
                    <p className="nav navmenu"><span><a
                        href="/">Home</a> &nbsp; &nbsp;</span></p>
                    <div className="container">Due
                        to the Covid-19 Pandemic, events have been cancelled or postponed. Information on these pages
                        may be inaccurate
                        or out-of-date due to the circumstances. We will work to update and adapt the information
                        accordingly as time progresses.
                    </div>
                    <section>
                        <div className="posts">
                            <article><a href="/events/series/" className="image"><img
                                sizes="(min-width: 30em) 43vw, 95vw" srcSet=", /events/technopagan_hu75e5cbecd5bcf498c2af6806ed763681_3245165_210x0_resize_q75_box.jpg 210w
, /events/technopagan_hu75e5cbecd5bcf498c2af6806ed763681_3245165_256x0_resize_q75_box.jpg 256w
, /events/technopagan_hu75e5cbecd5bcf498c2af6806ed763681_3245165_430x0_resize_q75_box.jpg 430w
, /events/technopagan_hu75e5cbecd5bcf498c2af6806ed763681_3245165_650x0_resize_q75_box.jpg 650w"
                                src="/events/technopagan.jpg" alt=""/></a><h3>Series and Special Events</h3><p>Get
                                information about the different types of regular and special events around the area.
                                There’s usually a weekly event or a seasonal festival going on.</p>
                                <ul className="actions">
                                    <li><a href="/events/series/" className="button">More</a></li>
                                </ul>
                            </article>
                            <article><a href="/events/open-mic/" className="image"><img
                                sizes="(min-width: 30em) 43vw, 95vw" srcSet=", /events/tabula-rasa-junction_hudcad328aef68e69a08021a92d3784262_1734167_210x0_resize_q75_box.jpg 210w
, /events/tabula-rasa-junction_hudcad328aef68e69a08021a92d3784262_1734167_256x0_resize_q75_box.jpg 256w
, /events/tabula-rasa-junction_hudcad328aef68e69a08021a92d3784262_1734167_430x0_resize_q75_box.jpg 430w
, /events/tabula-rasa-junction_hudcad328aef68e69a08021a92d3784262_1734167_650x0_resize_q75_box.jpg 650w"
                                src="/events/tabula-rasa-junction.jpg" alt=""/></a><h3>Open Mics</h3><p>Find local open
                                mic events</p>
                                <ul className="actions">
                                    <li><a href="/events/open-mic/" className="button">More</a></li>
                                </ul>
                            </article>
                        </div>
                    </section>
                    <section><h3>Event Planning</h3><p>Do you have an idea for an event or want to try something out?
                        Take advantage of our network
                        to help with
                        planning and promotion.</p>
                        <footer><a href="/events/planning/" className="button icon solid fa-info-circle">Find out
                            more</a></footer>
                    </section>
                    <section><h3>Venues Directory</h3>
                        <ul className="style2">
                            <li><a href="http://claremontmusicscene.com/events/venues/black-watch-pub/">Black Watch
                                Pub</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/bridges-auditorium/">Bridges
                                Auditorium</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/bridges-hall-of-music/">Bridges
                                Hall of Music</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/candlelight-pavillion/">Candlelight
                                Pavillion</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/dragons-tale-brewery/">Dragon's
                                Tale Brewery</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/folk-music-center/">Folk Music
                                Center</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/ironbark-ciderworks/">Ironbark
                                Ciderworks</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/styles-music/">Styles Music</a>
                            </li>
                            <li><a href="http://claremontmusicscene.com/events/venues/the-press/">The Press
                                Restaurant</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/the-whisper-house/">The Whisper
                                House</a></li>
                            <li><a href="http://claremontmusicscene.com/events/venues/walters-restaurant/">Walter's
                                Restaurant</a></li>
                        </ul>
                    </section>
                </div>
            </div>
            <div id="sidebar" className="inactive">
                <div className="inner">
                   <Nav/>
                    <Footer/>
                </div>
                <a href="#sidebar" className="toggle">Toggle</a></div>
        </div>

    )
}
