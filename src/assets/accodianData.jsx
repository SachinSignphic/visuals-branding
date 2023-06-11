
const Content1 = () => {
    return (
        <>
            <span className="blk-color ff-almeria-b">Build your identity</span> alongside our brand experts.
            We’ll design a cohesive, one of a kind look that’s
            inspired by your unique personality, values and
            audience. <br /><br />
            The <span className="blk-color ff-almeria-b">#1</span> starting place for creators seeking a
            professional rebrand - or building their first live-
            streaming identity. Your <span className="blk-color ff-almeria-b">Visuals Branding </span>kit will
            include :<br /><br />
            Logo Design<br />
            Color palette creation<br />
            Typography selection<br />
            Brand guidelines, including logo usage & visual
            language
        </>
    )
}

const Content2 = () => {
    return (
        <>
            {/* <span className="blk-color ff-almeria-b">Build your identity</span>  */}
            The full package for live performers. We’ll overhaul your complete broadcast system — or create one from scratch — to design a custom production that <span className="blk-color ff-almeria-b">reflects your brand.</span>
            <br/ ><br />
            Our most popular option for streamers, gaming creators, podcasters, virtual DJs and showrunners.<span className="blk-color ff-almeria-b">Visuals Branding</span> stream overlay packages typically include:
            <br/ ><br />
            Modular live overlays
            <br />
            3D motion design
            <br />
            Widgets & alerts
            <br />
            Screens & profile art
        </>
    )
}

const Content3 = () => {
    return (
        <>
            {/* <span className="blk-color ff-almeria-b">Build your identity</span> alongside our brand experts. */}
            Push the limits of broadcast innovation. The synergy between designer and developer is what sets our team apart. Enlist our creative engineers to start custom-building for your channel — no challenge is too large.
            <br /><br />
            <span className="blk-color ff-almeria-b">Visuals Branding</span> developers apply advanced coding to build interactive overlays and alert systems. Their work spans across all live-streaming software, including:
            <br /><br />
            Streamlabs
            <br />
            StreamElements
            <br />
            OBS Studio
        </>
    )
}

const Content4 = () => {
    return (
        <>
            {/* <span className="blk-color ff-almeria-b">Build your identity</span> alongside our brand experts. */}
            Need a specialty animation for an upcoming broadcast or event? Commission our motion designers for an independent project — we’re experts in advanced motion designgin & animation work.
            <br /><br />
            <span className="blk-color ff-almeria-b">Visuals Branding</span> works with creators, brands, esports orgs and game publishers on a variety of motion projects, including:
            <br /><br />
            Intros & outros
            <br />
            Screens, alerts & stinger transitions
            <br />
            Lower thirds
            <br />
            Promotional assets & more
        </>
    )
}

const Content5 = () => {
    return (
        <>
            {/* <span className="blk-color ff-almeria-b">Build your identity</span> alongside our brand experts. */}
            Reward your fans with custom chat experiences. Recruit our team of illustrators — we’ll hand-draw personalized emotes and badges for your channel.
            <br /><br />
            <span className="blk-color ff-almeria-b">Visuals Branding</span> is home to some of the industry’s most accomplished pixel artists. Together, we’ve created tens of thousands of custom emoticons, including:
            <br /><br />
            Twitch emotes
            <br />
            YouTube Super Stickers
            <br />
            Facebook Gaming badges
            <br />
            Discord animated emotes
        </>
    )
}

const Content6 = () => {
    return (
        <>
            <span className="blk-color ff-almeria-b">Build your identity</span> alongside our brand experts.
            We’ll design a cohesive, one of a kind look that’s
            inspired by your unique personality, values and
            audience. <br /><br />
            The <span className="blk-color ff-almeria-b">#1</span> starting place for creators seeking a
            professional rebrand - or building their first live-
            streaming identity. Your <span className="blk-color ff-almeria-b">Visuals Branding </span>kit will
            include :<br /><br />
            Logo Design<br />
            Color palette creation<br />
            Typography selection<br />
            Brand guidelines, including logo usage & visual
            language
        </>
    )
}

const accordianData = [
    {
        header: 'Branding',
        content: <Content1 />
            
    },
    {
        header: 'Stream Overlay Packages',
        content: <Content2 />
    },
    {
        header: 'Custom Widgets',
        content: <Content3 />
    },
    {
        header: 'Motion Design & Animation',
        content: <Content4 />
    },
    {
        header: 'Emotes & Badges',
        content: <Content5 />
    },
    {
        header: '3D Environment Creation',
        content: <Content6 />
    },
];

export default accordianData;