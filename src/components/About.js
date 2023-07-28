export default function About() {
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: '2rem 20rem 20rem'}}>
            <h1>About</h1>
            <p>This tutorial will be creating, reading, searching, updating, and deleting data.
                A typical web app would probably be talking to an API on your web server,
                but we're going to use browser storage and fake some network latency to keep this focused.
                None of this code is relevant to React Router, so just go ahead and copy/paste it all.
                Etiam eu tellus in velit fringilla efficitur. Sed consectetur pellentesque ipsum, sed laoreet elit.
                Proin vel fermentum ante. Aliquam erat volutpat. In vel sodales nibh. Integer elementum elit vel nisl elementum interdum.
                Duis a vulputate ante. Suspendisse potenti. Morbi non dapibus nisl. </p>
        </div>
    )
}