import { Flex } from "@mantine/core";
import React from "react";
import "./styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div
        className="text-center p-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <p className="contact">Anders Personsgatan 18,</p>
          <p className="contact">416 64 Göteborg</p>
        </div>
        <div>
          <a className="contact" href="/kontakt">
            <div className="kontakta-link">Kontakta oss</div>
          </a>
          Copyright © 2022 HUMANIDA
        </div>
      </div>
    </footer>
  );
}
