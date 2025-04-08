import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between" }}
        alignItems="start"
      >
        {/* Left Column */}
        <Grid item xs={12} sm={6}>
          <div className="Footer-download-app-badges">
            <div>
              <Link
                href="https://app.appsflyer.com/id930441707?pid=appstorehomepage"
                target="_blank"
              >
                <Image
                  src="/appstore.svg"
                  width={150}
                  height={150}
                  alt="Get in on App Store"
                  style={{ marginTop: "-30px" }}
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://app.appsflyer.com/com.bumble.app?pid=googleplayhomepage"
                target="_blank"
              >
                <Image
                  src="/googleplay.svg"
                  width={164}
                  height={164}
                  alt="Get in on Google Play"
                  style={{ marginTop: "-37px" }}
                />
              </Link>
            </div>
          </div>
        </Grid>
        {/* Right Column */}
        <Grid item xs={12} sm={6}>
          <ul className="Footer-menu">
            <Link href="/events">
              <li>Events</li>
            </Link>
            <Link href="/guidelines">
              <li>Guidelines</li>
            </Link>
            <Link href="/support">
              <li>Support</li>
            </Link>
          </ul>
        </Grid>
      </Grid>

      <p className="Footer-about-text">
        Twieezi is designed to help you feel empowered while you build those
        connections, whether you’re dating, seeking for friends, or growing your
        professional network. We champion integrity, kindness, equality,
        confidence, and respect during all stages of any relationship. We don’t
        just welcome, we celebrate every orientation – whether you’re here to
        find love or simply find fun.
      </p>

      <br />

      <div className="Footer-social-icons">
        <Link href="https://www.instagram.com/bumble/" target="_blank">
          <Instagram style={{ fontSize: 40, color: "rgb(52, 51, 51)" }} />
        </Link>
        <Link href="https://www.facebook.com/bumbleapp" target="_blank">
          <Facebook style={{ fontSize: 40, color: "rgb(52, 51, 51)" }} />
        </Link>
        <Link href="https://www.linkedin.com/company/bumble" target="_blank">
          <LinkedIn style={{ fontSize: 40, color: "rgb(52, 51, 51)" }} />
        </Link>
        <Link href="https://twitter.com/bumble" target="_blank">
          <X style={{ fontSize: 40, color: "rgb(52, 51, 51)" }} />
        </Link>
      </div>

      <p className="Footer-copyright-text">
        Copyright © {new Date().getFullYear()}. Twieezi. All rights reserved.
      </p>
    </footer>
  );
}
