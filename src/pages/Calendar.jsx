import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const GoogleCalendar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    const CLIENT_ID = ""
    const API_KEY = ""

    const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    useEffect(() => {
        const script1 = document.createElement("script");
        script1.src = "https://apis.google.com/js/api.js";
        script1.async = true;
        script1.onload = handleGapiLoaded;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src = "https://accounts.google.com/gsi/client";
        script2.async = true;
        script2.onload = handleGisLoaded;
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);


    const handleGapiLoaded = () => {
        window.gapi.load("client:auth2", initializeGapiClient);
    };
    const initializeGapiClient = async () => {
        try {
            await window.gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: [DISCOVERY_DOC],
                scope:  'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/calendar',

            });

            const authInstance = window.gapi.auth2.getAuthInstance();
            setIsSignedIn(authInstance.isSignedIn.get());
            authInstance.isSignedIn.listen(updateSigninStatus);


        } catch (error) {
            console.error("Error initializing GAPI client:", error);
            setError(error.message || "Error initializing GAPI client");
        }
    };


    const handleGisLoaded = () => {
        // This function is empty as we currently don't have specific functionality to execute
    };

    const updateSigninStatus = (isUserSignedIn) => {
        setIsSignedIn(isUserSignedIn);
        if (isUserSignedIn) {
            listUpcomingEvents();
        }
    };

    const handleAuthClick = async () => {
        const authInstance = window.gapi.auth2.getAuthInstance();
        if (!authInstance.isSignedIn.get()) {
            try {
                const user = await authInstance.signIn({ prompt: 'consent', access_type: 'offline' });
                console.log(user.getAuthResponse().refresh_token); // Log the auth response to inspect it
            } catch (error) {
                console.error('Error signing in:', error);
                setError(error.message || 'Error signing in');
            }
        }
    };

    const handleSignoutClick = async () => {
        const authInstance = window.gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
            await authInstance.signOut();
        }
    };

    const listUpcomingEvents = async () => {
        try {
            const response = await window.gapi.client.calendar.events.list({
                calendarId: "primary",
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 10,
                orderBy: "startTime"
            });
            const eventsData = response.result.items || [];
            setEvents(eventsData);
        } catch (error) {
            console.error("Error fetching events:", error);
            setError(error.message || "Error fetching events");
        }
    };

    return (
        <div>
            <p>Google Calendar API Quickstart</p>
            <button id="authorize_button" onClick={handleAuthClick} style={{ visibility: isSignedIn ? "hidden" : "visible" }}>
                Authorize
            </button>
            <button id="signout_button" onClick={handleSignoutClick} style={{ visibility: isSignedIn ? "visible" : "hidden" }}>
                Sign Out
            </button>
            <pre id="content" style={{ whiteSpace: "pre-wrap" }}>
                {error ? error : events.map((event, index) => `${event.summary} (${event.start.dateTime || event.start.date})\n`).join("")}
            </pre>
        </div>
    );
};

export default GoogleCalendar;
