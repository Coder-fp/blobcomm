export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { userStatus } = req.body;
  
        if (!userStatus || userStatus.length === 0) {
          return res.status(400).json({ error: "No user status data provided" });
        }
  
        // Format the user status list as a single string
        const statusList = userStatus
          .map(user => `**${user.name}** — ${user.status}`)
          .join("\n");
  
        // Get current date in dd/mm/yy format
        const now = new Date();
        const day = String(now.getDate()).padStart(2, "0");
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const year = String(now.getFullYear()).slice(-2);
        const formattedDate = `${day}/${month}/${year}`;
  
        const webhookPayload = {
          embeds: [
            {
              title: "📋 Attendance Register",
              description: statusList,
              color: 3447003, // Discord blurple
              footer: {
                text: `Submitted on ${formattedDate}`,
              },
            },
          ],
        };
  
        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
        if (!webhookUrl) {
          return res.status(500).json({ error: "Webhook URL is not set" });
        }
  
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookPayload),
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error sending to Discord:", errorText);
          return res.status(500).json({ error: `Failed to send webhook: ${errorText}` });
        }
  
        return res.status(200).json({ message: "Attendance sent successfully!" });
      } catch (error) {
        console.error("Webhook Error:", error);
        return res.status(500).json({ error: error.message });
      }
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  