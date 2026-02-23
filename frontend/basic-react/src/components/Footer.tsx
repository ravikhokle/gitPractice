function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "40px 20px",
        marginTop: "auto",
        width: "100%"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px"
        }}
      >
        {/* About Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h2 style={{ marginBottom: "10px" }}>NSG Academy</h2>
          <p>Learn • Practice • Succeed</p>
          <p>Pune, Maharashtra</p>
        </div>

        {/* Contact Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ marginBottom: "10px" }}>Contact Us</h3>
          <p>📞 +91 9876543210</p>
          <p>📧 nsgacademy@gmail.com</p>
          <p>🕒 Mon - Sat : 9:00 AM - 7:00 PM</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        style={{
          borderTop: "1px solid gray",
          marginTop: "30px",
          paddingTop: "15px",
          textAlign: "center",
          fontSize: "14px"
        }}
      >
        © 2026 NSG Academy | All Rights Reserved
      </div>
    </footer>
  );
}

export { Footer };